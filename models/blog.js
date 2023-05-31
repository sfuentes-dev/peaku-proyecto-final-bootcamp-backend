import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Blog = db.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: DataTypes.STRING,
    // validate: {
    //   isDate: true,
    // },
  },
  imgUrl: {
    type: DataTypes.STRING,
    defaultValue: 'https://via.placeholder.com/150',
    allowNull: false,
  },
})

export default Blog
