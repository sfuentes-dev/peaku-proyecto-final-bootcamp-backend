import { Router } from 'express'

import {
  createPlan,
  deletePlan,
  getPlans,
  updatePlan,
} from '../controllers/planController.js'

const router = Router()

router.get('/', getPlans)
router.post('/', createPlan)
router.put('/:id', updatePlan)
router.delete('/:id', deletePlan)

export default router
