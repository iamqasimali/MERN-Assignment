const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class marks extends Model {}

marks.init(
  {
    markID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentID: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
      references: {
        model: "students",
        key: "studentID",
      },
    },
    teacherID: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
      references: {
        model: "teachers",
        key: "teacherID",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "marks",
    sequelize,
  }
);

module.exports = marks;
