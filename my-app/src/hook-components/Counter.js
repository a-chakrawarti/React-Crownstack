import React, { useState } from 'react';
import '../HookApp.css'

function Counter() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const btnStyle = 'button'

    function incrementFive() {
        for (let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button className = {btnStyle} onClick={() => setCount(count + 1)}>Unsafe Increment</button> {/* Unsafe */}
            <button className = {btnStyle} onClick={() => setCount(initialCount)}>Reset</button> {/* Accessing the state using a prevState is safe */}
            <button className = {btnStyle} onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button> {/* Accessing the state using a prevState is safe */}
            <button className = {btnStyle} onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button> {/* Accessing the state using a prevState is safe */}
            <button className = {btnStyle} onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

export default Counter;