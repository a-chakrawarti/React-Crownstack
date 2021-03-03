import React from 'react';
import './HookApp.css'

import Counter from './hook-components/Counter'
import InputName from './hook-components/InputName';

function HookApp() {

    const container = 'container'
    return(
        <div>
            <h2 className='header'>Hook App</h2>
            <div className={`${container}`}>
                <InputName />
                <Counter />
            </div>
        </div>
    )
}

export default HookApp;