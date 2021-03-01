import React from 'react';
import ReactDOM from 'react-dom'

function PortalApp() {
    return ReactDOM.createPortal(
        <>
            <h2>Portal Root</h2>
        </>,
        document.getElementById('portal-root')
    )
}

export default PortalApp;