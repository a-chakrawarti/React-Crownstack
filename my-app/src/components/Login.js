import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }
    }

    login = () => {
        this.setState({
            isLogged: true
        })
    }

    logout = () => {
        this.setState({
            isLogged: false
        })
    }

    render() {
        let button
        {/* likewise we can use ternary operator instead of explicitly doing if-else */}
        if (this.state.isLogged) {
            button =  <div>
                <button onClick = {this.logout}>Logout</button>
                <div>You have successfully logged in! Welcome Anupam!</div>
            </div>
        }
        else {
            button = <div>
                    <button onClick = {this.login}>Login</button>
                    <div>You have logged out. Redirecting ...</div>
                </div>
        }

        return (
            <div>
                <h3>Conditional Rendering</h3>
                {button}
            </div>
            )
    }
}

export default Login;