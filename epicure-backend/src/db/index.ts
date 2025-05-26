import mongoose from "mongoose";


const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI!).catch(err =>{
    console.error("Failed to connect")
  });
};

export { connectDb };
