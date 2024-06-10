const markModel = require("../models/markModel");
const { v4: uuid } = require("uuid");

module.exports = {
  getAllMarks: async () => {
    try {
      const marks = await markModel.getAllMarks();

      if (marks.error) {
        return {
          error: marks.error,
        };
      }

      return {
        response: marks.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  createMark: async (body) => {
    try {
      body.markID = uuid();
      const marks = await markModel.createMark(body);

      if (marks.error) {
        return {
          error: marks.error,
        };
      }
      return {
        response: marks.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  findMark: async (markID) => {
    try {
      const mark = await markModel.findMark(markID);
      console.log("Mark found", mark);

      if (mark.error) {
        return {
          error: mark.error,
        };
      }
      return {
        response: mark.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  findMarkByPK: async (markID) => {
    try {
      const mark = await markModel.findMarkByPK(markID);
      console.log("Mark found", mark);

      if (mark.error) {
        return {
          error: mark.error,
        };
      }
      return {
        response: mark.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  deleteMark: async (markID) => {
    try {
      const deleteMark = await markModel.deleteMark(markID);

      if (deleteMark.error || !deleteMark.response) {
        return {
          error: {
            message: "Error in deleting Mark",
            error: deleteMark?.error || deleteMark.response,
          },
        };
      }

      return {
        response: {
          message: "Mark is deleted!",
          response: deleteMark.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },

  updateMark: async (body) => {
    try {
      const updateMark = await markModel.updateMark(body);
      console.log(updateMark.response);
      if (updateMark.error || !updateMark.response) {
        return {
          error: {
            message: "Error in update!",
            error: updateMark?.error || updateMark.response,
          },
        };
      }

      return {
        response: {
          message: "Mark is update!",
          response: updateMark.response,
        },
      };
    } catch (error) {
      return { error: error };
    }
  },
};
