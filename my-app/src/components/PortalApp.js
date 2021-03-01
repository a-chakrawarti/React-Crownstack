import React from 'react'
import ReactDOM from 'react-dom'
import Avengers from './Avengers'
import ErrorBoundary from './ErrorBoundary';

function PortalApp() {
    return ReactDOM.createPortal(
        <>
            <h2>Portal Root</h2>
            <Avengers codeName="Thor"></Avengers>
            <Avengers codeName="Iron Man"></Avengers>
            <ErrorBoundary>
                <Avengers codeName="Falcon"></Avengers>
            </ErrorBoundary>
            <Avengers codeName="Hulk"></Avengers>
            <ErrorBoundary>
                <Avengers codeName="Captain America"></Avengers>
            </ErrorBoundary>
        </>,
        document.getElementById('portal-root')
    )
}

export default PortalApp;