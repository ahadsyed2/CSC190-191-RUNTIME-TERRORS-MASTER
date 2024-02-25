const Vehicle = require('../models/vehicleModel');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const getVehicle = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Something went horribly wrong, No Vehicle Found'})
  }

  const vehicle = await Vehicle.findById(id)

  if(!vehicle){
    return res.status(404).json({error: 'Vehicle Invalid'})
  }

  res.status(200).json(vehicle)
}

const getAllVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({}).sort({createdAt: -1})

  res.status(200).json(vehicles)
}

const createVehicle = async (req, res) => {

  res.status(200)
}

const updateVehicle = async (req, res) => {

  res.status(200)
}

const deleteVehicle = async (req, res) => {

  res.status(200)
}

module.exports = {
  getVehicle,
  getAllVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle
}