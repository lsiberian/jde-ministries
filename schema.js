const graphql= require('graphql')
const db = require('./queries')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
  } = graphql;
  
  const DevotionalType = new GraphQLObjectType({
    name: 'Devotional',
    fields: {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      verse: { type: GraphQLString },
      teaching: { type: GraphQLString },
    }
  })

  const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
          devotionals: { 
              type: new GraphQLList(DevotionalType),
              resolve: (parentValue, args) => {
                 return db.getDevotionalsGraphQL()
                  .then(result => {
                    console.log(result)
                    return result
                  })

              }
          },

          devotional: {
            type: DevotionalType,
            args: { id : { type: GraphQLID }},
            resolve: (parentValue, args) => {
              return db.getDevotionalGraphQLByID(args.id)
                .then(result => {
                  console.log(result)
                  return result
                })
              }
          }

      }
  })
  
    module.exports = new GraphQLSchema({
      query: RootQuery  
    })