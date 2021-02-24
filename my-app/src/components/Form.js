import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comment: '',
            framework: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleFrameworkChange = (event) => {
        this.setState({
            framework: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`
        Username: ${this.state.username}
        Comment: ${this.state.comment}
        Framework: ${this.state.framework}
        `
        )
        event.preventDefault();
    } 

    render() {
        const {username, comment, framework} = this.state;
        return (
            <div>
                <h3>Controlled Component</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" value = {username} onChange={this.handleUsernameChange}/>

                    <div>
                        <label>Comments: </label>
                        <textarea value = {comment} onChange={this.handleCommentChange}></textarea>
                    </div>

                    <div>
                        <label>Front-end framework: </label>
                        <select value={framework} onChange={this.handleFrameworkChange}>
                            <option value="react">ReactJS</option>
                            <option value="angular">AngularJS</option>
                            <option value="vue">VueJS</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <br/>
            </div>
        )
    }
}

export default Form;
