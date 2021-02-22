import React from 'react';

// class component
class Todos extends React.Component {

    constructor(props) {
        super();
        this.state = {
            message: 'Hello, this is Todo!'
        }

        // this.changeMessage = this.changeMessage.bind(this); // binding in the constructor
    }

    changeMessage() {
        this.setState({
            message: 'Thats all folks!'
        })
    }

    changeMessageTwo = () => {
        this.setState({
            message: 'Thats all for now folks!'
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
                {/* <button onClick = { this.changeMessage.bind(this) }>Change Message</button> // bind in render, have performance issue */}
                {/* <button onClick = { () => this.changeMessage() }>Change Message</button> // simple, arrow function, this to has performance issue */}
                {/* <button onClick = { this.changeMessage }>Change Message</button> // binding in the constructor, recommended */}
                <button onClick = { this.changeMessageTwo }>Change Message</button>
            </div>
        );
    }
}

export default Todos;