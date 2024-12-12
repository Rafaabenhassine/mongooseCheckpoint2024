const express=require("express")

//importation function connect
const connect = require("./Config/connectDB")

//create instance
const app=express()

//middleware ( barrière ou filtre )
app.use(express.json())

//require dotenv
require('dotenv').config()

// connecting to DB
connect()

// create PORT
const PORT=process.env.PORT

// create server

app.listen(PORT,(error)=>{

    error?console.log(error):console.log(`server in running on port ${PORT}`)
})

//require routes
app.use('/api/person',require('./Routes/route'))
