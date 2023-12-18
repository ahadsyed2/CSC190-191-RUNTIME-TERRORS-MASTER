const Profile = require('../models/profileModel');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const getProfile = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Something went horribly wrong, No profile Found'})
  }

  const profile = await Profile.findById(id)

  if(!profile){
    return res.status(404).json({error: 'Profile Invalid'})
  }

  res.status(200).json(profile)
}

const createProfile = async (req, res) => {

  res.status(200)
}

const updateProfile = async (red, res) => {

}

const deleteProfile = async (red, res) => {

}

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
}