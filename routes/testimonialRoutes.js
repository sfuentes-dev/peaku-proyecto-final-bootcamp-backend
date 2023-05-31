import { Router } from 'express'

import {
  createTestimonial,
  deleteTestimonial,
  getTestimonials,
  updateTestimonial,
} from '../controllers/testimonialsController.js'

const router = Router()

router.get('/', getTestimonials)
router.post('/', createTestimonial)
router.put('/:id', updateTestimonial)
router.delete('/:id', deleteTestimonial)

export default router
