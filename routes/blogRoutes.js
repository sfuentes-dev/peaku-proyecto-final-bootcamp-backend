import { Router } from 'express'

import {
  createBlogEntry,
  deleteBlogEntry,
  getBlogs,
  updateBlogEntry,
} from '../controllers/blogController.js'

const router = Router()

router.get('/', getBlogs)
router.post('/', createBlogEntry)
router.put('/:id', updateBlogEntry)
router.delete('/:id', deleteBlogEntry)

export default router
