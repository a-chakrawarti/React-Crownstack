import React, { useState } from 'react';
import '../HookApp.css'

function Counter() {

    const [count, setCount] = useState(0)
    const btnStyle = 'button'
    return (
        <div>
            <button className = {btnStyle} onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default Counter;