const { gql } = require('apollo-server')



export const typeDefs = gql`

  enum Worker{
    PixelAdmin
    Ample
  }
  enum Status{
    Active
    Pending
    Completed
    Cancel
  }
  type User {
    id: ID!
    email: String!
    name: String!
    adress: String
    workRole: String
    password: String!
    sales: [Sale]
    buying:[Sale]
  }
  type Sale {
    id: ID!
    worker:Worker!
    buyer: User!
    projectName: String!
    projectDescription: String!
    startDate: String!
    weeks: Int
    budget: String
    saler: User!
    status: Status
  }
  type CalendarTask  {
    id: ID!
    text: String!
    startDate: String!
    long: Int!
  }

  type Query {
    allUsers: [User!]!
    user(email: String!, password: String): User
    userById(id:Int!):User
    userSales(salerId:Int!):[Sale]
    oneSale(salerId:Int!, id:Int!): Sale
    userTasks(userId:Int!):[CalendarTask]
  }

  type Mutation {
    registerUser(email: String!, name: String!, password: String!): User!
    createSale(worker:Worker!, projectName:String!, projectDescription: String!, weeks: Int!, salerId: Int!, buyerId:Int!, budget:String!, status:Status!, startDate:Int!):Sale
    createTask(text:String!, long: Int!, userId:Int!, startDate:Int!):CalendarTask
    updateSale(worker:Worker!, id:Int!, projectName:String!, projectDescription: String!, weeks: Int!, salerId: Int!, buyerId:Int!, budget:String!, status:Status):Sale
    updateTask(text:String!, long: Int!, userId:Int!, id:Int!):CalendarTask
  }
`
