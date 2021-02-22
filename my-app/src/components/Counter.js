import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        // changing value once
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)})

        // console.log(this.state.count);

        // non-grouping state

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    // if prevState not used, calls are grouped and updated only for one.
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    decrement() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={ () => this.increment() }>Increment</button>
                <button onClick={ () => this.decrement() }>Decrement</button>
                <button onClick={ () => this.incrementFive() }>IncrementFive</button>
            </div>
        )
    }
}

export default Counter

