
const express = require("express")
const mongoose = require("mongoose")
const teacherRoutes = require("./routes/teacherRouters")

mongoose.connect("mongodb://localhost:27017/students")
    .then(() => console.log("connected"))

const app = express()
app.use(express.json())
app.use("/teacher",teacherRoutes)

const PORT = 4000
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})