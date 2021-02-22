import React from 'react';

class ClassClick extends React.Component {

    clickHandler() {
        console.log('Class component event fired!')
    }

    render() {
        return (
            <div>
                Event Handling in class component:<button onClick={this.clickHandler}>Click Event Class</button>
            </div>
        )
    }
}

export default ClassClick;