import React, { Component } from 'react';
import axios from 'axios'

class PostForm  extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() { 
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="userId" name="userId" value={userId} onChange={this.changeHandler}></input>
                    <input type="text" placeholder="title" name="title" value={title} onChange={this.changeHandler}></input>
                    <input type="text" placeholder="body" name="body" value={body} onChange={this.changeHandler}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default PostForm ;