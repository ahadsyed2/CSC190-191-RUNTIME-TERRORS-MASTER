import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken = (_id)=> {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
export const loginUser = async (req, res) => {
  const {email, password,firstname,lastname,userlocation} = req.body

  try{
    const user = await User.login(email, password,firstname,lastname,userlocation)

    //create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error){
    res.status(400).json({error: error.message})
  }
}

//signup user
export const signupUser = async (req, res) => {
  const {email, password,firstname,lastname,userlocation} = req.body

  try{
    const user = await User.signup(email, password,firstname,lastname,userlocation)

    //create a token
    const token = createToken(user._id)

    res.status(200).json({email, token,firstname,lastname,userlocation})
  } catch (error){
    res.status(400).json({error: error.message})
  }
}

//module.exports = {signupUser, loginUser}
