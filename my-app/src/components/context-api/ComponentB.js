import React, { Component } from 'react';
import UserContext from '../userContext';
import ComponentC from './ComponentC'

class ComponentB extends Component {

    static contextType = UserContext
    render() { 
        return (
            <>
                <h3>Using static contextType to render {this.context}</h3>
                <ComponentC />
            </>
        );
    }
}
 
export default ComponentB;