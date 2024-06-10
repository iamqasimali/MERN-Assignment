const { models } = require("./index");

module.exports = {
  getAllMarks: async () => {
    try {
      const marks = await models.marks.findAll({
        attributes: ["markID","subject", "score", "studentID", "teacherID"],
        // paranoid: false
      });
      return {
        response: marks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  createMark: async (body) => {
    try {
      const mark = await models.marks.create({ ...body });

      return {
        response: mark,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateMark: async ({ markID, ...body }) => {
    try {
        console.log(markID,body)
      const mark = await models.marks.update(
        { ...body },
        {
          where: {
            markID: markID,
          },
        }
      );
      return {
        response: mark,
      };
    } catch (error) {
      console.log("Model Error: ", error);
      return {
        error: error,
      };
    }
  },

  findMark: async (markID) => {
    try {
      const mark = await models.marks.findOne({
        where: { markID: markID[0] },
      });

      return {
        response: mark,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  findMarkByPK: async (markID) => {
    try {
        console.log("Mark ID", markID)
      const mark = await models.Marks.findByPk(markID[0]);

      return {
        response: mark,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  deleteMark: async (markID) => {
    try {
      const mark = await models.marks.destroy({ where: { markID: markID } });

      return {
        response: mark,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
