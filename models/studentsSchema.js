
const mongoose = require("mongoose")

const studentsSchema = new mongoose.Schema({
    email : {
        type:String,
        trim:true,
        required:true
    },
    name : {
        type:String,
        trim:true,
        required:true
    },
    semester : {
        type:String,
        trim:true,
        required:true
    },
    subjects : {
        type:[String],
        required:true
    },
    course : {
        type:String,
        trim:true,
        required:true
    },
    seatNumber : {
        unique:true,
        type : Number,
        required:true
    }
})

const studentsModel = mongoose.model("Students",studentsSchema)

module.exports = studentsModel