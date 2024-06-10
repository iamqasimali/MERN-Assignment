const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class teachers extends Model {}

teachers.init(
  {
    teacherID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    subject: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "teachers",
    sequelize,
  }
);

module.exports = teachers;