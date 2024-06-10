const studentService = require("../services/studentService");
const joi = require("joi")

const createStudentSchema = joi.object().keys({
  name: joi.string().max(34).min(3).required(),
  age: joi.number().integer().min(5).max(30).required(),
});

const updateStudentSchema = joi.object().keys({
    studentID: joi.string().length(36).required(),
    name: joi.string().max(34).min(3).required(),
    age: joi.number().integer().min(5).max(30).required(),
  });
const findStudentSchema = joi.object().keys({
    studentID: joi.array().single().required(),
});
module.exports = {
  getAllStudents: async(req, res) => {
    try {
       students = await studentService.getAllStudents();
      if (students.error) {
        return res.send({
          error: students.error,
        });
      }

      return res.send({
        response: students.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  createStudent: async(req, res) => {
    try {
        validate = await createStudentSchema.validateAsync(req.body)
        student = await studentService.createStudent(validate)
        
        if(student.error){
            return res.send({
                error: student.error
            })
        }

        return res.send({
            error: student.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  updateStudent: async(req, res) => {
    try {
        validate = await updateStudentSchema.validateAsync(req.body)
        student = await studentService.updateStudent(validate)
        
        if(student.error){
            return res.send({
                error: student.error
            })
        }

        return res.send({
            error: student.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findStudent: async(req, res) => {
    try {
        validate = await findStudentSchema.validateAsync(req.query)
        student = await studentService.findStudent(validate.studentID)
        
        if(student.error){
            return res.send({
                error: student.error
            })
        }

        return res.send({
            error: student.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  findStudentByPK: async(req, res) => {
    try {
        validate = await findStudentSchema.validateAsync(req.query)
        student = await studentService.findStudentByPK(validate.studentID)
        
        if(student.error){
            return res.send({
                error: student.error
            })
        }

        return res.send({
            error: student.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: async(req, res) => {
    try {
        validate = await findStudentSchema.validateAsync(req.query)
        student = await studentService.deleteStudent(validate.studentID)
        
        if(student.error){
            return res.send({
                error: student.error
            })
        }

        return res.send({
            error: student.response
        })
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
