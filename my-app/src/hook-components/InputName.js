import React, { useState } from 'react';

const InputName = () => {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    return (
        <div>
            <input type="text" 
            value={name.firstName}
            onChange={event => setName({...name, firstName: event.target.value})}>
            </input>
            <input type="text" 
            value={name.lastName}
            onChange={event => setName({...name, lastName: event.target.value})}>
            </input>

            <h3>{`Welcome, ${name.firstName} ${name.lastName}`}</h3>
        </div>
    );
}
 
export default InputName;