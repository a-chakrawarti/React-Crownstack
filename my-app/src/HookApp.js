import React from 'react';
import './HookApp.css'

import Counter from './hook-components/Counter'

function HookApp() {

    const container = 'container'
    return(
        <div>
            <h2>Hook App</h2>
            <div className={`${container}`}>
                <Counter />
            </div>
        </div>
    )
}

export default HookApp;