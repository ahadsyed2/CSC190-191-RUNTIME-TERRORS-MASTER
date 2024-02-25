const Post = require('../models/postingModel');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const getPost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Something went horribly wrong, No Post Found'})
  }

  const post = await Post.findById(id)

  if(!post){
    return res.status(404).json({error: 'Post Invalid'})
  }

  res.status(200).json(post)
}

const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({createdAt: -1})

  res.status(200).json(posts)
}

const createPost = async (req, res) => {

  res.status(200)
}

const updatePost = async (req, res) => {

  res.status(200)
}

const deletePost = async (req, res) => {

  res.status(200)
}

module.exports = {
  getPost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost
}