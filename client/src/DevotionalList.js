import React from 'react';
import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import DevotionalItem from './DevotionalItem'

const DevotionalList = () =>(
    <div className="flex-container">
    <Query
        query={gql`
            {
                devotionals {
                    id
                    title
                    verse
                }
            }
        `}
    >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.devotionals.map((devotional) => (

                <DevotionalItem key = {devotional.id} item={devotional}/>

        ));
    }}                
    </Query>
    </div>
)

export default DevotionalList