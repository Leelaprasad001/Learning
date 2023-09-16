import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic : 'react'
        }
    }

    handleusername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handlecomments = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }


    topichandler = (event) => {
        this.setState({
            topic: event.target.value,
        })
    }


    handlesubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()

        //event.preventDefault() is used to prevent the default behaviour of the form
    }


  render() {
    const {username, comment, topic} = this.state
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <div>
            <label>Username</label>
            <input type="text" value={username} onChange={this.handleusername}/>
          </div>
            <div>
                <label>Comments</label>
                <textarea value={comment} onChange={this.handlecomments}></textarea>
            </div>
             <div>
                <label>Topic</label>
                <select value={topic} onChange={this.topichandler}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
             </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
