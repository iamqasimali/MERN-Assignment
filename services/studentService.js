const studentModel = require("../models/studentModel");
const { v4: uuid } = require("uuid");

module.exports = {
  getAllStudents: async () => {
    try {
      const students = await studentModel.getAllStudents();

      if (students.error) {
        return {
          error: students.error,
        };
      }

      return {
        response: students.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  createStudent: async (body) => {
    try {

      body.studentID = uuid();
      const student = await studentModel.createStudent(body);

      if (student.error) {
        return {
          error: student.error,
        };
      }
      return {
        response: student.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  findStudent: async (studentID) => {
    try {
      const student = await studentModel.findStudent(studentID);
      console.log("Student found", student);

      if (student.error) {
        return {
          error: student.error,
        };
      }
      return {
        response: student.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  findStudentByPK: async (studentID) => {
    try {
      const student = await studentModel.findStudentByPK(studentID);
      console.log("Student found", student);

      if (student.error) {
        return {
          error: student.error,
        };
      }
      return {
        response: student.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  deleteStudent: async (studentID) => {
    try {
      const deleteStudent = await studentModel.deleteStudent(studentID);

      if (deleteStudent.error || !deleteStudent.response) {
        return {
          error: {
            message: "Error in deleting Student",
            error: deleteStudent?.error || deleteStudent.response,
          },
        };
      }

      return {
        response: {
          message: "Student is deleted!",
          response: deleteStudent.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },

  updateStudent: async (body) => {
    try {
      const updateStudent = await studentModel.updateStudent(body);
      console.log(updateStudent.response);
      if (updateStudent.error || !updateStudent.response) {
        return {
          error: {
            message: "Error in update!",
            error: updateStudent?.error || updateStudent.response,
          },
        };
      }

      return {
        response: {
          message: "Student is update!",
          response: updateStudent.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },
};
