'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    foo: String
  }
  type Schema{
    query: Query
  }
`);


const resolvers = {
  foo: () => 'bar',
};
