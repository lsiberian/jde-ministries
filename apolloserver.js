const db = require('./queries')

const { ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Devotional {
        id: ID!
        title: String,
        verse: String,
        teaching: String,
    }
    type Query {
        devotionals: [Devotional]
        devotional(id: Int!): Devotional
    }
`
const resolvers = {
    Query: {
        devotionals: () => db.getDevotionalsGraphQL(),
        devotional: (_,{id}) =>{
            console.log(_)
        db.getDevotionalGraphQLByID(id)},
    }
}
const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({url}) => {

console.log(`🚀  Server ready at ${url}`);
});
