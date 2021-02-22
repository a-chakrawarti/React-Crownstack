import React from 'react'

// event handling in functional components
function FunctionClick() {

    function clickHandler() {
        console.log('Event fired!')
    }
        

    return (
        <div>
            <button onClick={clickHandler}>Click Event</button>
        </div>
    )
}

export default FunctionClick;