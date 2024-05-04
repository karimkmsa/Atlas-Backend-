import mongoose, { Schema } from "mongoose";


const enrollmentSchema = new mongoose.Schema({
        student: {
          type: Schema.ObjectId,
          ref: 'Student',
          required: [true, 'Student ID is required']
        },
        subject: {
          type: Schema.ObjectId,
          ref: 'Subject',
          required: [true, 'Subject ID is required']
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
          required: [true, 'Enrollment date is required']
        }
      }, { timestamps: true });
    
    const enrollmentModel = mongoose.model("enrollment",enrollmentSchema);
    
    
    export default enrollmentModel;
    