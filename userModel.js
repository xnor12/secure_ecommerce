const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: DataTypes.STRING,
  photo: DataTypes.STRING,
  phone: DataTypes.STRING,
  website: DataTypes.STRING,
  birthPlace: DataTypes.STRING,
  birthDate: DataTypes.DATE,
  noKK: DataTypes.STRING,
  noKTP: DataTypes.STRING,
}, {
  timestamps: true,
});

sequelize.sync();
module.exports = User;