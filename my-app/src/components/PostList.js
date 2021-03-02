import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() { 
        const { posts } = this.state
        return (
            <div>
                <h3>List post using axios library</h3>
                <ul>
                    {
                        posts.length ?
                        posts.map(post => <li key={post.id}>{post.title}</li>) :
                        null
                    }
                </ul>
            </div>
        );
    }
}
 
export default PostList;