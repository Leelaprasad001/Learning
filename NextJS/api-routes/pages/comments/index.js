import { useState } from "react";

function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [updatedComment, setUpdatedComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    };

    const submitComments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        fetchComments(); // Refresh the list after submission
    };

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        fetchComments(); // Refresh the list after deletion
    };

    const updateComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'PATCH',
            body: JSON.stringify({ text: updatedComment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        fetchComments(); // Refresh the list after update
    };

    return (
        <>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a new comment"
            />
            <br />
            <button onClick={submitComments}>Submit Comment</button>
            <br />
            <button onClick={fetchComments}>Load Comments</button>
            <br />
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h1>{comment.id}</h1>
                    <h2>{comment.text}</h2>
                    <br />
                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    <br />
                    <input
                        type="text"
                        value={updatedComment}
                        onChange={(e) => setUpdatedComment(e.target.value)}
                        placeholder="Update this comment"
                    />
                    <br />
                    <button onClick={() => updateComment(comment.id)}>Update</button>
                </div>
            ))}
        </>
    );
}

export default CommentsPage;
