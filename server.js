import * as dotenv from "dotenv";
dotenv.config();
import express from 'express'
import {connection} from './databases/connection.js'
import { bootstrap } from './src/bootstrap.js'
import morgan from 'morgan'




const app= express()
app.use(morgan("dev"))
app.use(express.json())

const port = 3000 

app.use(express.static('uploads'));
connection();
bootstrap(app)



app.listen(port,()=>{

    console.log("server running");
})