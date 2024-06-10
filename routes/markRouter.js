const route = require('express').Router();

const {
    getAllMarks,
    createMark,
    updateMark,
    findMark,
    findMarkByPK,
    deleteMark

} = require("../controllers/markController")

route.get("/index",getAllMarks);
route.post("/create", createMark);
route.patch("/update", updateMark);
route.get("/show", findMark);
route.get("/findByPK", findMarkByPK)
route.delete("/destroy", deleteMark);

module.exports = route;