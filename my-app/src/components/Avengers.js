import React, { Component }from 'react';

class Avengers extends Component {

    render() {

        const {codeName} = this.props
        
        if (codeName === "Falcon") {
            throw new Error('Not an Avenger!')
        }
        return (
            <>
                <h4 style = {{color: 'purple'}}><i>{ codeName }</i> is an Avenger.</h4>
            </>
        );
    }
}
 
export default Avengers;