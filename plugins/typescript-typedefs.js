const { printSchema } = require("graphql");

module.exports = {
  plugin: (schema) => {
    return `export const typeDefs = /* GraphQL */ \`${printSchema(schema)}\`;`;
  },
};
