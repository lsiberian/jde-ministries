import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo';

const App = () => {
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
}

export default App;
