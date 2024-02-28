import express from 'express'
import {connection} from './databases/connection.js'




const app= express()
const port = 3000 





connection();
app.use(express.json())



app.listen(port,()=>{

    console.log("server running");
})