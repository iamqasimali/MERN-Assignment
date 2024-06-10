const { models } = require("./index");

module.exports = {
  getAllTeachers: async () => {
    try {
      const teachers = await models.teachers.findAll({
        attributes: ["teacherID", "name", "subject"],
        // paranoid: false
      });
      return {
        response: teachers,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  createTeacher: async (body) => {
    try {
      const teacher = await models.teachers.create({ ...body });
      return {
        response: teacher,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateTeacher: async ({ teacherID, ...body }) => {
    try {
        console.log(teacherID,body)
      const teacher = await models.teachers.update(
        { ...body },
        {
          where: {
            teacherID: teacherID,
          },
        }
      );
      return {
        response: teacher,
      };
    } catch (error) {
      console.log("Model Error: ", error);
      return {
        error: error,
      };
    }
  },

  findTeacher: async (teacherID) => {
    try {
      const teacher = await models.teachers.findOne({
        where: { teacherID: teacherID[0] },
      });

      return {
        response: teacher,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  findTeacherByPK: async (teacherID) => {
    try {
        console.log("Teacher ID", teacherID)
      const teacher = await models.Teachers.findByPk(teacherID[0]);

      return {
        response: teacher,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  deleteTeacher: async (teacherID) => {
    try {
      const teacher = await models.teachers.destroy({ where: { teacherID: teacherID } });

      return {
        response: teacher,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
