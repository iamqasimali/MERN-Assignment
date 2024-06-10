const route = require('express').Router();

const {
    getAllStudents,
    createStudent,
    updateStudent,
    findStudent,
    findStudentByPK,
    deleteStudent

} = require("../controllers/studentController")

route.get("/index",getAllStudents);
route.post("/create", createStudent);
route.patch("/update", updateStudent);
route.get("/show", findStudent);
route.get("/findByPK", findStudentByPK)
route.delete("/destroy", deleteStudent);

module.exports = route;