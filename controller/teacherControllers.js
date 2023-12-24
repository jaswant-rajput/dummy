
const mongoose = require("mongoose")
const Students = require("../models/studentsSchema")


exports.getStudents = async(req,res) =>{

    Students.find(req.query).then(response =>{
        res.json({
            message:"success",
            data:response
        })
        
    }).catch(err =>{
        res.status(500).json({
            message:"fail",
            data:err
        })
    })

    

}