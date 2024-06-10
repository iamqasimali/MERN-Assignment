const sequelize = require("../bin/dbConnection");

const students = require("./definations/students");
const teachers = require("./definations/teachers");
const marks = require("./definations/marks");

const models = { students, teachers, marks };

// Relations
students.hasMany(marks, { foreignKey: "studentID" });
marks.belongsTo(students, { foreignKey: "userID" });

teachers.hasMany(marks, { foreignKey: "teacherID" });
marks.belongsTo(teachers, { foreignKey: "teacherID" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
