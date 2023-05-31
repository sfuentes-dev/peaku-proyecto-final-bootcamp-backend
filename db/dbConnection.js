import db from './connection.js'

const dbConnection = async () => {
  try {
    await db.authenticate()
    console.log('Database Online')
  } catch (error) {
    throw new Error(error)
  }
}

export default dbConnection
