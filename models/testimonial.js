import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Testimonial = db.define('Testimonial', {
  avatar: {
    type: DataTypes.STRING,
    defaultValue:
      'https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685370130/testimonials-1_mg5afp.png',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Testimonial
