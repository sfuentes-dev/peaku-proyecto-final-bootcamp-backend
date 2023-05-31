import { request, response } from 'express'
import Testimonial from '../models/testimonial.js'

export const getTestimonials = async (req = request, res = response) => {
  const testimonials = await Testimonial.findAll()

  res.json(testimonials)
}

export const createTestimonial = async (req = request, res = response) => {
  const { body } = req

  try {
    const testimonialExist = await Testimonial.findOne({
      where: {
        title: body.title,
      },
    })

    if (testimonialExist) {
      return res.status(400).json({
        msg: 'A Testimonial Entry already exists with that title',
      })
    }

    const testimonial = new Testimonial(body)
    await testimonial.save()

    res.json(testimonial)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator',
    })
  }
}

export const updateTestimonial = async (req = request, res = response) => {
  const { id } = req.params
  const { body } = req

  try {
    const testimonial = await Testimonial.findByPk(id)

    if (!testimonial) {
      return res.status(404).json({
        msg: `Testimonial not found with id: ${id}`,
      })
    }

    await testimonial.update(body)

    res.json(testimonial)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator',
    })
  }
}

export const deleteTestimonial = async (req = request, res = response) => {
  const { id } = req.params

  const testimonial = await Testimonial.findByPk(id)

  if (!testimonial) {
    return res.status(404).json({
      msg: `Testimonial not found with id: ${id}`,
    })
  }

  // Eliminacion fisica
  await testimonial.destroy()

  // Eliminacion logica
  // await testimonial.update({ state: false })

  res.json(testimonial)
}
