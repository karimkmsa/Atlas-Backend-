import express from 'express'
import {connection} from './databases/connection.js'
import { bootstrap } from './src/bootstrap.js'
import morgan from 'morgan'
import dotenv from "dotenv"






const app= express()
app.use(morgan("dev"))
app.use(express.json())

const port = 3000 

dotenv.config()


connection();
bootstrap(app)




app.listen(port,()=>{

    console.log("server running");
})