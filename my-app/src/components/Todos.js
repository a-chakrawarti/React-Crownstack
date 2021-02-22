import React from 'react';
import FunctionClick from './FunctionClick';

// class component
class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, this is Todo!',
            parentName: 'Todojs'
        }

        this.greetParent = this.greetParent.bind(this);
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

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
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
                <FunctionClick greetHandler = { this.greetParent }/>
            </div>
        );
    }
}

export default Todos;