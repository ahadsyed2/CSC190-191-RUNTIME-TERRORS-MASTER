const express = require ('express')

//controller functions
const { getPost, createPost, updatePost, deletePost, getAllPosts } = require ('../controllers/postController')

const router = express.Router()

router.get('/:id', getPost)

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

module.exports = router