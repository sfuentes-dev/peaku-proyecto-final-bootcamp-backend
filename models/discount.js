import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Discount = db.define('Discount', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  rating: {
    type: DataTypes.FLOAT,
    validate: {
      min: 0,
      max: 5,
    },
  },
  price: {
    type: DataTypes.INTEGER, // or DataTypes.FLOAT
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  discount: {
    type: DataTypes.INTEGER, // or DataTypes.FLOAT
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imgUrl: {
    type: DataTypes.STRING,
    defaultValue: 'https://via.placeholder.com/150',
    allowNull: false,
  },
})

export default Discount
