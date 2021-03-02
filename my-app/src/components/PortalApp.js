import React from 'react'
import ReactDOM from 'react-dom'
import Avengers from './Avengers'
import ErrorBoundary from './ErrorBoundary';
import ComponentA from './context-api/ComponentA'
import { UserProvider } from './userContext';
import PostList from './PostList'
import PostForm from './PostForm';

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
            <UserProvider value="Iron-Man">
                <ComponentA />
            </UserProvider>
            <PostList />
            <PostForm />
        </>,
        document.getElementById('portal-root')
    )
}

export default PortalApp;