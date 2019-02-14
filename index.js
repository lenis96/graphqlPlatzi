const express=require('express')
const bodyParser=require('body-parser')
const {graphqlExpress,graphiqlExpress}=require('graphql-server-express')
const schema=require('./schema')

require('./db/setup')

const PORT=8080
const app=express()

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema
    })
)

app.use('/graphiql',graphiqlExpress({
    endpointURL:'/graphql'
}))

app.listen(PORT,()=>{
    console.log(`server runnning on port ${PORT}`)
})