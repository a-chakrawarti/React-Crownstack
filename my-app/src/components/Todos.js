import React from 'react';

// class component
class Todos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <p>This is a {this.props.type} based Component</p>
            </div>
        );
    }
}

export default Todos;