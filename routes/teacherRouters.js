
const express = require("express")
const {getStudents} = require("../controller/teacherControllers")
const router = express.Router()

router.get("/getStudents",getStudents)

module.exports = router