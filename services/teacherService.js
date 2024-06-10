const teacherModel = require("../models/teacherModel");
const { v4: uuid } = require("uuid");

module.exports = {
  getAllTeachers: async () => {
    try {
      const teachers = await teacherModel.getAllTeachers();

      if (teachers.error) {
        return {
          error: teachers.error,
        };
      }

      return {
        response: teachers.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  createTeacher: async (body) => {
    try {
      body.teacherID = uuid();
      const teacher = await teacherModel.createTeacher(body);

      if (teacher.error) {
        return {
          error: teacher.error,
        };
      }
      return {
        response: teacher.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  findTeacher: async (teacherID) => {
    try {
      const teacher = await teacherModel.findTeacher(teacherID);
      console.log("Teacher found", teacher);

      if (teacher.error) {
        return {
          error: teacher.error,
        };
      }
      return {
        response: teacher.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  findTeacherByPK: async (teacherID) => {
    try {
      const teacher = await teacherModel.findTeacherByPK(teacherID);
      console.log("Teacher found", teacher);

      if (teacher.error) {
        return {
          error: teacher.error,
        };
      }
      return {
        response: teacher.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  deleteTeacher: async (teacherID) => {
    try {
      const deleteTeacher = await teacherModel.deleteTeacher(teacherID);

      if (deleteTeacher.error || !deleteTeacher.response) {
        return {
          error: {
            message: "Error in deleting Teacher",
            error: deleteTeacher?.error || deleteTeacher.response,
          },
        };
      }

      return {
        response: {
          message: "Teacher is deleted!",
          response: deleteTeacher.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },

  updateTeacher: async (body) => {
    try {
      const updateTeacher = await teacherModel.updateTeacher(body);
      console.log(updateTeacher.response);
      if (updateTeacher.error || !updateTeacher.response) {
        return {
          error: {
            message: "Error in update!",
            error: updateTeacher?.error || updateTeacher.response,
          },
        };
      }

      return {
        response: {
          message: "Teacher is update!",
          response: updateTeacher.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },
};
