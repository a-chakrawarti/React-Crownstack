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
        return (
            <div>
                <h1>Todos</h1>
                <p>This is a { this.props.type } based Component</p><br />
                <h3>Message: { this.state.message }</h3>
                <button onClick = { () => this.changeMessage() }>Change Message</button>
            </div>
        );
    }
}

export default Todos;