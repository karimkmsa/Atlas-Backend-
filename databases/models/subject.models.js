import { Schema,Types,model } from "mongoose"

const subjectSchema = new Schema({
    
    name:{
            type:String,
            required: [true, 'name is required'],
            trim:true,
            min: [2, 'minimum length 2 char'],
            max: [20, 'max length 2 char']
    },

    description:{
        type:String,
        required: [true, 'description is required'],
        trim:true,
        min: [2, 'minimum length 2 char'],
        max: [1000, 'max length 2 char']
},
duration: {
    type: String,
    required: [true, 'duration is required'],
    default: "3 months"
},
teachers: {
    type: Schema.Types.ObjectId,
    ref: 'teacher',
}

 
},{timeStamp:true});

export const subjectModel=model('subject',subjectSchema)
 