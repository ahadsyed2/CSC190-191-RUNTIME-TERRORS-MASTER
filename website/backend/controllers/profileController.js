import Profile from '../models/profileModel.js';
import mongoose from 'mongoose';
import express from 'express';

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

const getAllProfiles = async (req, res) => {
  const profiles = await Profile.find({}).sort({createdAt: -1})

  res.status(200).json(profiles)
}

const createProfile = async (req, res) => {

  res.status(200)
}

const updateProfile = async (req, res) => {

  res.status(200)
}

const deleteProfile = async (req, res) => {

  res.status(200)
}

export { getProfile, getAllProfiles, createProfile, updateProfile, deleteProfile };
