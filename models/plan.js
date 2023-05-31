import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Plan = db.define('Plan', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    validate: {
      min: 0, // Minimum value for rating is 0
      max: 5, // Maximum value for rating is 5
    },
  },
  imgUrl: {
    type: DataTypes.STRING(200),
    defaultValue: 'https://via.placeholder.com/150',
    allowNull: false,
    validate: {
      isUrl: true, // Validate that imgUrl is a valid URL
    },
  },
})

export default Plan
