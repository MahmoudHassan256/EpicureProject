import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true
      },
      lastname:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
      },
      phonenumber:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true,
      },
    },
    { timestamps: true }
  );
  
const Users = mongoose.model('Users', usersSchema);
  
export default Users;

