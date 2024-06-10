const { models } = require("./index");

module.exports = {
  getAllStudents: async () => {
    try {
      const students = await models.students.findAll({
        attributes: ["studentID", "name", "age"],
        // paranoid: false
      });
      return {
        response: students,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  createStudent: async (body) => {
    try {
      const student = await models.students.create({ ...body });

      return {
        response: student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateStudent: async ({ studentID, ...body }) => {
    try {
        console.log(studentID,body)
      const student = await models.students.update(
        { ...body },
        {
          where: {
            studentID: studentID,
          },
        }
      );
      return {
        response: student,
      };
    } catch (error) {
      console.log("Model Error: ", error);
      return {
        error: error,
      };
    }
  },

  findStudent: async (studentID) => {
    try {
      const user = await models.students.findOne({
        where: { studentID: studentID[0] },
      });

      return {
        response: user,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  findStudentByPK: async (studentID) => {
    try {
        console.log("student ID", studentID)
      const student = await models.students.findByPk(studentID[0]);

      return {
        response: student,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  deleteStudent: async (studentID) => {
    try {
      const student = await models.students.destroy({ where: { studentID: studentID } });

      return {
        response: student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
