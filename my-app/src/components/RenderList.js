import React, {Component } from 'react'

class RenderList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            persons: []
        }

    }

    componentDidMount() {
        const url = 'http://jsonplaceholder.typicode.com/users'
        let response = fetch(url)
        response.then(data => data.json()).then(
            data => this.setState({
                persons: data
            })
        )
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
                <h4>Loading data while mounting</h4>
                <ul>
                    {this.state.persons.map(person => <li key={person.id}>{`${person.name} - ${person.email.toLowerCase()}`}</li>)}
                </ul>
                <br/>
                <h4>Rendering List fetched from https://api.github.com/users</h4>
                <button style = { this.clickButton } onClick={ () => this.loadData() }>Click here to load data</button>
                <ul>
                    {this.state.users.map(user => <li key={user.id}>{user.login}</li>)}
                </ul>

            </div>
            
        )
    }
}


export default RenderList;