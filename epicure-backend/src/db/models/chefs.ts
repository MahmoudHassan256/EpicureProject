import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      url:{
        type:String,
        required:true
      },
      award:{
        type:Boolean,
        required:false,
      },
      new:{
        type:Boolean,
        required:false,
      },
      popular:{
        type:Boolean,
        required:false,
      },
      Restaurantscontainer:{
        type:Array,
        required:false,
      },
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

