import { request, response } from 'express'
import Blog from '../models/blog.js'

export const getBlogs = async (req = request, res = response) => {
  const blogs = await Blog.findAll()

  res.json(blogs)
}

export const createBlogEntry = async (req = request, res = response) => {
  const { body } = req

  try {
    const blogExist = await Blog.findOne({
      where: {
        title: body.title,
      },
    })

    if (blogExist) {
      return res.status(400).json({
        msg: 'A Blog Entry already exists with that title',
      })
    }

    const blog = new Blog(body)
    await blog.save()

    res.json(blog)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator',
    })
  }
}

export const updateBlogEntry = async (req = request, res = response) => {
  const { id } = req.params
  const { body } = req

  try {
    const blog = await Blog.findByPk(id)

    if (!blog) {
      return res.status(404).json({
        msg: `Blog entry not found with id: ${id}`,
      })
    }

    await blog.update(body)

    res.json(blog)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator',
    })
  }
}

export const deleteBlogEntry = async (req = request, res = response) => {
  const { id } = req.params

  const blog = await Blog.findByPk(id)

  if (!blog) {
    return res.status(404).json({
      msg: `Blog entry not found with id: ${id}`,
    })
  }

  // Eliminacion fisica
  await blog.destroy()

  // Eliminacion logica
  // await blog.update({ state: false })

  res.json(blog)
}
