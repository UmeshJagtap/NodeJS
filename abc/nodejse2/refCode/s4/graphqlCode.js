// npm init -y
// npm install express graphql express-graphql

// graphql

// browser -> /graphql
// -> schema
// -> rootquery
// -> resolve()
// -> return

const express = require('express');
// const graphqlHTTP = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');

const {
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
// import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const app = express();

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello world';
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log('server running');
});

// npm install mysql
// npm install apollo-server graphql

const { ApolloServer, graphqhtest } = require('apollo-server');

const test = graphqhtest`
type User {
  id: ID
  username: String!
  usermail: String!
}
`;
