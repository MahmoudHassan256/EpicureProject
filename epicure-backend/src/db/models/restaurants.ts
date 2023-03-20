import mongoose from 'mongoose';
interface priceRangeData{
  min:number,
  max:number,
}
const restaurantsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      chef:{
        type:String,
        required:true,
      },
      url:{
        type:String,
        required:true,
      },
      stars:{
        type:Number,
        required:true,
      },
      popular:{
        type:Boolean,
        required:false,
      },
      new:{
        type:Boolean,
        required:false, 
      },
      open:{
        type:Boolean,
        required:false,
      },
      dishescontainer:{
        type:Array,
        required:false,
      },
      priceRange:{
        type:{min:Number,max:Number},
        required:false,
      },
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

