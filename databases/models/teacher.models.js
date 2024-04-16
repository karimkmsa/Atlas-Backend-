import { Schema,Types,model } from "mongoose"

const teacherSchema = new Schema({
    
    // personal information
    firstname:{
            type:String,
            required: [true, 'firstname is required'],
            trim:true,
            min: [2, 'minimum length 2 char'],
            max: [20, 'max length 2 char']
    },
   lastname:{
        type:String,
        required: [true, 'lastname is required'],
            trim:true,
            min: [2, 'minimum length 2 char'],
            max: [20, 'max length 2 char']
        },


phone:{
    type:Number,
    unique:true,
    required:true,
    trim:true,
},
Address:{
    type:String,
    required:true,
    trim:true,
},
    subject:{
        type:Schema.ObjectId,
        ref:"subject",
      },
 
},{timeStamp:true});

export const teacherModel=model('teacher',teacherSchema)
 