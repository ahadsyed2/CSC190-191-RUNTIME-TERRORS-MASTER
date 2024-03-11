import express from 'express';

//controller functions
const { getVehicle, createVehicle, updateVehicle, deleteVehicle, getAllVehicles } = require ('../controllers/vehicleController')

const router = express.Router()

router.get('/:id', getVehicle)

router.get('/', getAllVehicles)

router.post('/', createVehicle)

router.patch('/:id', updateVehicle)

router.delete('/:id', deleteVehicle)

export default router;
