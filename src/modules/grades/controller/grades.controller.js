import {GradeModel} from "../../../../databases/models/grades.models.js";
import { AppError } from "../../../utils/AppError.js";
import { catchError } from "../../../utils/catchError.js";

export const AddGrade = catchError(async (req, res, next) => {
    const gradeData = req.body;
    const newGrade = new GradeModel(gradeData);
    await newGrade.save();
    res.status(201).json({ message: "Grade added", data: newGrade });
});

export const updateGrade = catchError(async (req, res, next) => {
    const { id, grade } = req.body;
    const existingGrade = await GradeModel.findById(id);
    if (existingGrade) {
        const updatedGrade = await GradeModel.findByIdAndUpdate(id, {grade:grade}, { new: true });
        console.log(updatedGrade);
        res.json({ message: "Grade updated successfully", data: updatedGrade });
    } else {
        res.status(404).json({ message: "Grade not found" });
    }
});

export const deleteGrade = catchError(async (req, res, next) => {
    const { id } = req.body;
    const existingGrade = await GradeModel.findById(id);
    if (existingGrade) {
        await GradeModel.findByIdAndDelete(id);
        res.json({ message: "Grade deleted successfully" , data:existingGrade });
    } else {
        res.status(404).json({ message: "Grade not found" });
    }
});

export const getAllGrades = catchError(async (req, res, next) => {
    const grades = await GradeModel.find();
    res.json({ message: "All Grades", data: grades });
});
