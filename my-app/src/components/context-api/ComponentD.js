import React, { Component } from 'react';
import { DefaultConsumer, UserConsumer } from '../userContext';

class ComponentD extends Component {

    inevitable = {
        color: 'orange',
        fontSize: '40px',
        fontWeight: 'bold'
    }
    render() { 
        return (
            <>
                <br/><br/>
                <h3>Context-API</h3>
                <p>Passed data "Iron-Man" in value attritube of UserProvider present in parent "PortalApp" component enclosing the top level ComponentA and consuming that directly in ComponentD without having to pass props down manually at every A, B, C Component</p>
                <UserConsumer>
                {
                    (legend) => {
                        return <span style={this.inevitable}>{legend} is inevitable.</span>
                    }
                }
                </UserConsumer>
                <br/>
                <DefaultConsumer>
                    {
                        legend => {
                            return (
                                <>
                                    <p>Here value is passed in the React.createContext itself, that is the default value of the context.</p>
                                    <span style={this.inevitable}>{legend} is inevitable.</span>
                                </>
                            ) 
                            
                        }
                    }
                </DefaultConsumer>
            </>
        );
    }
}
 
export default ComponentD;