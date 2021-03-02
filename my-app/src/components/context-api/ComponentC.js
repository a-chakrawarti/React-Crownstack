import React, { Component } from 'react';
import UserContext from '../userContext';
import ComponentD from './ComponentD'

class ComponentC extends Component {
    render() { 
        return (
            <>
                <h3>Using ComponentC.contextType to render {this.context}</h3>
                <h5>Cons of using contextType</h5>
                <ul>
                    <li>We can use this process to access props only in class components</li>
                    <li>We can subscribe to only single context</li>
                </ul>
                <ComponentD />
            </>
        );
    }
}

ComponentC.contextType = UserContext
 
export default ComponentC;