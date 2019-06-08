import React from 'react';
import { render } from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { Query, ApolloProvider } from 'react-apollo';
import DevotionalItem from '/DevotionalItem'

const Devotionals = () =>(
    <Query
        query={gql`
            {
                devotionals {
                    id
                    title
                    teaching
                }
            }
        `}
    >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.devotionals.map(({ id, title, teaching }) => (
            <div key={id}>
                <DevotionalItem />
            </div>
        ));
    }}                
    </Query>
)

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

// client
//     .query({
//         query: gql`
//         {
//             devotionals {
//                 title
//                 teaching
//             }
//         }
//         `
//     })
//     .then(result => console.log(result.data));

    const App = () => (
        <ApolloProvider client={client}>
          <div>
            <h2>My first Apollo app 🚀</h2>
            <Devotionals />
          </div>
        </ApolloProvider>
    );

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
