import React from 'react'

// event handling in functional components
function FunctionClick() {

    function clickHandler() {
        console.log('Function component event fired!')
    }
        

    return (
        <div>
            Event Handling in functional component:<button onClick={clickHandler}>Click Event Function</button>
        </div>
    )
}

export default FunctionClick;