const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
const validator = require ('validator')

const Schema = mongoose.Schema

//required params
const userSchema = new Schema({

        email: {
            type: String,
            required: true,
            //only allows for one email address
            unique: true,

        },

        password:{
            type: String,
            required: true

        },

        firstname:{
            type: String,
            required: false

        },

        lastname:{
            type: String,
            required: false

        },

        userlocation:{
            type: String,
            required: false

        }



})

//STATIC SIGN UP 
//function fires from userController
userSchema.statics.signup = async function(email,password,firstname,lastname,userlocation)  {

    //validation
    //if no email or password
    if (!email || !password) {
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Invalid email")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough. A password needs 1 capital, 1 special character and at least 8 letters")
    }

     //check if email exists in db

     const exists = await this.findOne({ email })

     if (exists){
        throw Error('Email already in use')
     }

    //password security with bcrypt, adds random characters to password before hashing
     const salt = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(password,salt)

     //create user w email and hashed password
     const user = await this.create({email, password: hash,firstname,lastname,userlocation})

     //return user back to controller signupUser
     return user 

}

//STATIC LOGIN METHOD
userSchema.statics.login = async function (email,password,firstname,lastname,userlocation) {

    //validation
    if (!email || !password) {
        throw Error("All fields must be filled")
    }

     //find user in db with this email

    const user = await this.findOne({email})
    //if no user found with this email
    if(!user){
        throw Error("Incorrect email, cant find in db")
    }

    //match passwords using bcrypt compare

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Incorrect Password")
    }

    return user
    
}







module.exports = mongoose.model('User', userSchema)