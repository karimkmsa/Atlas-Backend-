import complaintModel from "../../../../databases/models/complaints.models.js";
import medicalRecordModel from "../../../../databases/models/medicalrecord.models.js";
import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"



export  const postComplaint =catchError(async(req,res,next)=>{
    let complaint= req.body
    let result = new complaintModel(complaint)
    await result.save()
    res.status(201).json({message:"complaint added", result})


    })


    export  const AddMedicalRecord =catchError(async(req,res,next)=>{
        let medicalRecord= req.body
        let result = new medicalRecordModel(medicalRecord)
        await result.save()
        res.status(201).json({message:"medicalRecord added", result})
    
    
        })   
        
        export  const UpdateMedicalRecord =catchError(async(req,res,next)=>{
            let{id,medicalRecord}=req.body
            const exist = await medicalRecordModel.findById(id)
             console.log(medicalRecord);
             if(exist){
                const UpdateMedicalRecord = await medicalRecordModel.findByIdAndUpdate(id, {medicalRecord},{new:true})
                res.json({message:"medicalRecord updated successfully ",UpdateMedicalRecord})
            
             }
             else{
                res.json({message:"medicalRecord not found"})
            
             }
            
        
        
            })   
       
            export const deleteMedicalRecord = async(req,res)=>{
                let{id}=req.body
                let findMedicalRecord= await medicalRecordModel.findById(id)
                if(findMedicalRecord){
                    const deleted= await medicalRecordModel.findByIdAndDelete(id)
                        res.json({message:"medicalRecord deleted",deleted})
                }
                else{
            
                    res.json({message:"wrong id"})
            
            
                }
            
            
            }



        export const showMedicalRecord =catchError(async (req, res, next) => {
            let data = await medicalRecordModel.find();
              res.status(201).json({ message: "MedicalRecord", data });
          });    