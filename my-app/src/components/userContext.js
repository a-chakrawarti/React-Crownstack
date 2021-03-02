import React from 'react';

const UserContext = React.createContext()

const DefaultContext = React.createContext('Thanos')

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

const DefaultProvider = DefaultContext.Provider

const DefaultConsumer = DefaultContext.Consumer

export { UserProvider, UserConsumer, DefaultConsumer, DefaultProvider}

export default UserContext;