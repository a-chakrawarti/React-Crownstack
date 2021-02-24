import React from 'react';
import './style.css'
import style from './style.module.css'

function Stylesheet() {
    let className = 'primary';

    const heading = {
        color: 'blue',
        fontSize: '46px'
    }

    return (
        <span>
            <h3 className={`${className} font-l`}>This has been modified with regular Stylesheet</h3> {/* using regular stylesheet */}
            <h3 style={heading}>This is inline styling</h3>
            <h3 className={style.head}>This is module stylesheet</h3>
        </span>
    )
}

export default Stylesheet;