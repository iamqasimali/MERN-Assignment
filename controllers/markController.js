const markService = require("../services/markService");
const joi = require("joi");

const createMarkSchema = joi.object().keys({
  score: joi.number().integer().min(0).required(),
  subject: joi.string().max(34).min(3).required(),
  studentID: joi.string().length(36).required(),
  teacherID: joi.string().length(36).required(),
});

const updateMarkSchema = joi.object().keys({
  markID: joi.string().length(36).required(),
  score: joi.number().integer().min(0).required(),
  subject: joi.number().integer().min(5).max(30).required(),
});

const findMarkSchema = joi.object().keys({
  markID: joi.array().single().required(),
});

module.exports = {
  getAllMarks: async (req, res) => {
    try {
      marks = await markService.getAllMarks();
      if (marks.error) {
        return res.send({
          error: marks.error,
        });
      }

      return res.send({
        response: marks.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  createMark: async (req, res) => {
    try {
      validate = await createMarkSchema.validateAsync(req.body);
      mark = await markService.createMark(validate);

      if (mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        error: mark.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateMark: async (req, res) => {
    try {
      validate = await updateMarkSchema.validateAsync(req.body);
      mark = await markService.updateMark(validate);

      if (Mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        error: mark.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findMark: async (req, res) => {
    try {
      validate = await findMarkSchema.validateAsync(req.query);
      mark = await markService.findMark(validate.markID);

      if (mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        error: mark.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findMarkByPK: async (req, res) => {
    try {
      validate = await findMarkSchema.validateAsync(req.query);
      mark = await markService.findMarkByPK(validate.markID);

      if (mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        error: mark.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteMark: async (req, res) => {
    try {
      validate = await findMarkSchema.validateAsync(req.query);
      mark = await markService.deleteMark(validate.markID);

      if (Mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        error: mark.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
