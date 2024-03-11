import mongoose from 'mongoose';

const Schema = mongoose.Schema

const profileSchema = new Schema({
  //Object id = _id
  picture: {
    type: String,
    required: false
  },
  display_name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  contact_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { timestamps: true })

//Need to add more if it is going to match the Figma.


export default mongoose.model('Profile', profileSchema);
