const teacherService = require("../services/teacherService");
const joi = require("joi")

const createTeacherSchema = joi.object().keys({
  name: joi.string().max(34).min(3).required(),
  subject: joi.string().max(34).min(3).required(),
});

const updateTeacherSchema = joi.object().keys({
    teacherID: joi.string().length(36).required(),
    name: joi.string().max(34).min(3).required(),
    subject: joi.string().max(34).min(3).required(),
  });

const findTeacherSchema = joi.object().keys({
    TeacherID: joi.array().single().required(),
});

module.exports = {
  getAllTeachers: async(req, res) => {
    try {
       teachers = await teacherService.getAllTeachers();
      if (teachers.error) {
        return res.send({
          error: teachers.error,
        });
      }

      return res.send({
        response: teachers.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  createTeacher: async(req, res) => {
    try {
        validate = await createTeacherSchema.validateAsync(req.body)
        teacher = await teacherService.createTeacher(validate)
        
        if(teacher.error){
            return res.send({
                error: teacher.error
            })
        }

        return res.send({
            error: teacher.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateTeacher: async(req, res) => {
    try {
        validate = await updateTeacherSchema.validateAsync(req.body)
        teacher = await teacherService.updateTeacher(validate)
        
        if(Teacher.error){
            return res.send({
                error: teacher.error
            })
        }

        return res.send({
            error: teacher.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findTeacher: async(req, res) => {
    try {
        validate = await findTeacherSchema.validateAsync(req.query)
        teacher = await teacherService.findTeacher(validate.teacherID)
        
        if(teacher.error){
            return res.send({
                error: teacher.error
            })
        }

        return res.send({
            error: teacher.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findTeacherByPK: async(req, res) => {
    try {
        validate = await findTeacherSchema.validateAsync(req.query)
        teacher = await teacherService.findTeacherByPK(validate.teacherID)
        
        if(teacher.error){
            return res.send({
                error: teacher.error
            })
        }

        return res.send({
            error: teacher.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteTeacher: async(req, res) => {
    try {
        validate = await findTeacherSchema.validateAsync(req.query)
        teacher = await teacherService.deleteTeacher(validate.teacherID)
        
        if(Teacher.error){
            return res.send({
                error: teacher.error
            })
        }

        return res.send({
            error: teacher.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
