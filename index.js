const express=require('express')
const cors=require('cors')
require('dotenv').config()

//DATABASE CONNECTION
require('./config/db')

const server=express()



const route=require('./allRoutes/route')
server.use(cors())
server.use(express.json())
server.use(route)



const PORT=3000

server.get('/',(req,res)=>{
    res.status(200).json("Server Started successfully")
})

server.listen(PORT,()=>{
    console.log("Server Started...");
})