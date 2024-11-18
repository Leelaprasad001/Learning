import { comments } from "@/data/comments";

export default function Handler(req, res) {
    const { commentId } = req.query;

    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentId));
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
        comments.splice(index, 1);
        res.status(200).json({ message: 'Comment deleted' });
    } else if (req.method === 'PATCH') {
        const { text } = req.body;
        const comment = comments.find((comment) => comment.id === parseInt(commentId));

        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
        } else {
            comment.text = text; // Update the comment text
            res.status(200).json({ message: 'Comment updated', comment });
        }
    } else {
        res.setHeader('Allow', ['GET', 'DELETE', 'PATCH']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
