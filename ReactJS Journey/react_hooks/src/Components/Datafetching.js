import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Datafetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>

            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default Datafetching


//using useEffect hook we can fetch data from api using axios
//we can fetch data from api using fetch method also but axios is more popular
//using button we can fetch data from api first create a button and then create a function that will be called on button click 
//in that function we will use axios to fetch data from api using useEffect hook