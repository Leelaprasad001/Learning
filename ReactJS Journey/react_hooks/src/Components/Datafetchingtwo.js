import React,{useReducer, useEffect} from 'react'
import axios from 'axios'


const initialstate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function Datafetchingtwo() {
  const [state, dispatch] = useReducer(reducer, initialstate)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

  return (
    <div>
       {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null} 
    </div>
  )
}

export default Datafetchingtwo

//using useReducer for data fetching