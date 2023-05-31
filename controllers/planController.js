import { request, response } from 'express'
import Plan from '../models/plan.js'

export const getPlans = async (req = request, res = response) => {
  const plan = await Plan.findAll()

  res.json(plan)
}

export const createPlan = async (req = request, res = response) => {
  const { body } = req

  try {
    const planExist = await Plan.findOne({
      where: {
        city: body.city,
      },
    })

    if (planExist) {
      return res.status(400).json({
        msg: 'This plan already exists',
      })
    }

    const plan = new Plan(body)
    await plan.save()
    res.json(plan)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Talk to the administrator' })
  }
}

export const updatePlan = async (req = request, res = response) => {
  const { id } = req.params
  const { body } = req

  try {
    const plan = await Plan.findByPk(id)

    if (!plan) {
      return res.status(404).json({
        msg: `No plan found with this id: ${id}`,
      })
    }

    await plan.update(body)

    res.json(plan)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Talk to the administrator' })
  }
}

export const deletePlan = async (req = request, res = response) => {
  const { id } = req.params

  const plan = await Plan.findByPk(id)

  if (!plan) {
    return res.status(404).json({
      msg: `Plan not found with this id: ${id}`,
    })
  }

  await plan.destroy()

  res.json(plan)
}
