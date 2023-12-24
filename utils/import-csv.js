

// First approach not creating arrays
const csv = require("csvtojson")
const mongoose = require("mongoose")
const Students = require("../models/studentsSchema")

mongoose.connect("mongodb://localhost:27017/students").then(()=>{
    console.log("connected")
})

// Path of the csv file that is to be imported
const csvFilePath = "../data/students_dummy.csv"

csv().fromFile(csvFilePath).then((jsonObj)=>{
    let jsonData = jsonObj
    jsonData.map(data =>{
        const subjectsData = data.subjects.slice(1,-1).split(",")
        data.subjects = subjectsData.map((subject)=> subject.trim())
        data.seatNumber = data.seatNumber * 1
    })
    insertMany(jsonData)
    
})


const insertMany = async(data) => {
    try {
        await Students.create(data)
        console.log("Date imported")
    }catch(err){
        console.log(err)
    }
    process.exit()
}










