import { request, response } from 'express'
import Discount from '../models/discount.js'

export const getDiscounts = async (req = request, res = response) => {
  const discounts = await Discount.findAll()

  res.json(discounts)
}

export const createDiscount = async (req = request, res = response) => {
  const { body } = req

  try {
    const discountExist = await Discount.findOne({
      where: {
        city: body.city,
      },
    })

    if (discountExist) {
      return res.status(400).json({
        msg: 'This discount already exists',
      })
    }

    const discount = new Discount(body)
    await discount.save()
    res.json(discount)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Talk to the administrator' })
  }
}

export const updateDiscount = async (req = request, res = response) => {
  const { id } = req.params
  const { body } = req

  try {
    const discount = await Discount.findByPk(id)

    if (!discount) {
      return res.status(404).json({
        msg: `Discount not found with this id: ${id}`,
      })
    }

    await discount.update(body)

    res.json(discount)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Talk to the administrator' })
  }
}

export const deleteDiscount = async (req = request, res = response) => {
  const { id } = req.params

  const discount = await Discount.findByPk(id)

  if (!discount) {
    return res.status(404).json({
      msg: `Discount not found with this id: ${id}`,
    })
  }

  await discount.destroy()

  res.json(discount)
}
