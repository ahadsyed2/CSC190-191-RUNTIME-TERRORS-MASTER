const express = require ('express')

//controller functions
const {posting} = require ('../controllers/postingController')

const router = express.Router()

//posting route
router.post('/Posting', posting)


module.exports = router