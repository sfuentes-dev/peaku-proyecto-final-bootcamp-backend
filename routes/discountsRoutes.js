import { Router } from 'express'

import {
  createDiscount,
  deleteDiscount,
  getDiscounts,
  updateDiscount,
} from '../controllers/discountController.js'

const router = Router()

router.get('/', getDiscounts)
router.post('/', createDiscount)
router.put('/:id', updateDiscount)
router.delete('/:id', deleteDiscount)

export default router
