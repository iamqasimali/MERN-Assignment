const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class students extends Model {}

students.init(
  {
    studentID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "students",
    sequelize,
  }
);

module.exports = students;
