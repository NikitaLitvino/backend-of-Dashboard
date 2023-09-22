

const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });




server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));

/*mutation($email: String!, $name: String! $password:String!){
  registerUser(email: $email, name: $name, password: $password) {
    id
    name
    email
    password
  }
}*/