const graphqlHTTP = require("express-graphql")
const express = require("express")
const { graphql } = require("graphql")
const cors = require('cors')

const omdbSchema = require("./schema/schema")

const app = express()

app.use(cors())

app.use("/graphql", graphqlHTTP({
  schema: omdbSchema,
  graphiql: true
}))

app.listen(4242, () => {
  console.log('Listening on port 4242 ;)')
})
