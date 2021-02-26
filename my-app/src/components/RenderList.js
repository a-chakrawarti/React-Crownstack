import React, {Component } from 'react'

class RenderList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

    }

    loadData = async () => {
        const url = 'https://api.github.com/users';
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            users: data
        })
    }

    clickButton = {
        padding: '10px'
    }

    render() {
        return (
            <div>
                <h3>Rendering List fetched from https://api.github.com/users</h3>
                <button style = { this.clickButton } onClick={ () => this.loadData() }>Click here to load data</button>
                <ul>
                    {this.state.users.map(user => <li key={user.id}>{user.login}</li>)}
                </ul>
            </div>
            
        )
    }
}


export default RenderList;