import express from 'express';
//controller functions
//const { getPost, createPost, updatePost, deletePost, getAllPosts } = require ('../controllers/postController')
import { getPost, createPost, updatePost, deletePost, getAllPosts } from '../controllers/postController.js';

const router = express.Router()

router.get('/:id', getPost)

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

export default router;
