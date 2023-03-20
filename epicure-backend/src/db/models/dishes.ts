import mongoose from 'mongoose';

const dishesSchema = new mongoose.Schema(
    {
     name:{
      type:String,
      required:true,
     },
     ingredients:{
      type:String,
      required:true,
     },
     url:{
      type:String,
      required:true,
     },
     price:{
      type:Number,
      required:true,
     },
     type:{
      type:String,
      required:true,
     },
     types:{
      type:Array<String>,
      required:false,
     }
    },
    { timestamps: true }
  );
  
const Dishes = mongoose.model('Dishes', dishesSchema);
  
export default Dishes;

