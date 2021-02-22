import React from 'react';

// class component
class Todos extends React.Component {

    constructor(props) {
        super();
        this.state = {
            message: 'Hello, this is Todo!'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thats all folks!'
        })
    }

    render() {
        const {type} = this.props; // destructuring props and get only those you require
        const {message} = this.state; // destructuring state object
        return (
            <div>
                <h1>Todos</h1>
                <p>This is a { type } based Component</p><br />
                <h3>Message: { message }</h3>
                <button onClick = { () => this.changeMessage() }>Change Message</button>
            </div>
        );
    }
}

export default Todos;