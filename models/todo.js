import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Todo = db.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'https://via.placeholder.com/75',
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
})

export default Todo
