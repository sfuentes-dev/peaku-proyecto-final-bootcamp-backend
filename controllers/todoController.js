import { request, response } from 'express'
import Todo from '../models/todo.js'

export const getTodos = async (req = request, res = response) => {
  const todos = await Todo.findAll()

  res.json(todos)
}

export const getTodo = async (req = request, res = response) => {
  const { id } = req.params
  const todo = await Todo.findByPk(id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({
      msg: `No existe el todo con el id: ${id}`,
    })
  }
}

export const createTodo = async (req = request, res = response) => {
  const { body } = req

  try {
    const todoExist = await Todo.findOne({
      where: {
        title: body.title,
      },
    })

    if (todoExist) {
      return res.status(400).json({
        msg: 'Ya existe una tarea con ese nombre',
      })
    }

    const todo = new Todo(body)
    await todo.save()

    res.json(todo)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador',
    })
  }
}

export const updateTodo = async (req = request, res = response) => {
  const { id } = req.params
  const { body } = req

  try {
    const todo = await Todo.findByPk(id)

    if (!todo) {
      return res.status(404).json({
        msg: `No existe el todo con el id: ${id}`,
      })
    }

    await todo.update(body)

    res.json(todo)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador',
    })
  }
}

export const deleteTodo = async (req = request, res = response) => {
  const { id } = req.params

  const todo = await Todo.findByPk(id)

  if (!todo) {
    return res.status(404).json({
      msg: `No existe el todo con el id: ${id}`,
    })
  }

  // Eliminacion fisica
  // await todo.destroy()

  // Eliminacion logica
  await todo.update({ state: false })

  res.json(todo)
}
