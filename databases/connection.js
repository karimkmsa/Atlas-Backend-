import mongoose from "mongoose";

export const connection =()=>{
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
  console.log("DB error",err);
})


} 