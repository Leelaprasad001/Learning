import React, { Component } from 'react'
import axios from 'axios'

class Axions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        posts: [],
        errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }


  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
         <h1>List of posts</h1> 

            {/* {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>) :
                null
            } */}

            { errorMsg ? <div>{errorMsg}</div> : null}

        {/* // want only 1st 10 posts */}
        {
            posts.length ?
            posts.slice(0,10).map(post => <div key={post.id}>{post.title}</div>) :
             null
         }
        
      </div>
    )
  }
}

export default Axions


//Axions are used to make HTTP requests from node.js or XMLHttpRequests from the browser that's why we need to install axios
//We use componentDidMount() lifecycle method to make HTTP requests
//we use axios.get() method to make get request
//we use axios.post() method to make post request
//we use axios.put() method to make put request
//we use axios.delete() method to make delete request
//we use axios.request() method to make request
//we use axios.all() method to make multiple requests
//we use axios.spread() method to make multiple requests
//we use axios.interceptors.request.use() method to make multiple requests
//we use axios.interceptors.response.use() method to make multiple requests
//we use axios.CancelToken to cancel requests
//we use axios.create() method to make multiple requests
