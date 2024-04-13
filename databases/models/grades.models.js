import { Schema, model } from "mongoose";

const gradeSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'student',
    required: [true, 'Student ID is required']
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'subject',
    required: [true, 'subject ID is required']
  },
  grade: {
    type: Number,
    required: [true, 'Grade is required'],
    min: [0, 'Minimum grade is 0'],
    max: [100, 'Maximum grade is 100']
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'teacher',
    required: [true, 'Teacher ID is required']
  }
}, { timestamps: true });

export const GradeModel = model('grade', gradeSchema);
