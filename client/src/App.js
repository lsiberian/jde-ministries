import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import DevotionalList from './DevotionalList';


const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

    const App = () => (
        <ApolloProvider client={client}>
          <div>
            <DevotionalList />
          </div>
        </ApolloProvider>
    );

export default App;
