import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) { // redundant as react automatically logs error in the console
        console.log(info);
    }

    render() { 
        if (this.state.hasError) {
            return (
                <>
                    <h5 style ={{color: 'red'}}>Something went wrong!<br/>Contact S.H.I.E.L.D Operative.</h5>
                </>
            )
        }
        return this.props.children        
    }
}
 
export default ErrorBoundary;