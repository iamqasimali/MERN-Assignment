const route = require('express').Router();

const {
    getAllTeachers,
    createTeacher,
    updateTeacher,
    findTeacher,
    findTeacherByPK,
    deleteTeacher

} = require("../controllers/teacherController")

route.get("/index",getAllTeachers);
route.post("/create", createTeacher);
route.patch("/update", updateTeacher);
route.get("/show", findTeacher);
route.get("/findByPK", findTeacherByPK)
route.delete("/destroy", deleteTeacher);

module.exports = route;