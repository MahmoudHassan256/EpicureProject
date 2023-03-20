import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb+srv://Mahmoud256:Mahmoud123@cluster0.hwbwzxv.mongodb.net/Epicure?retryWrites=true&w=majority");
};

export { connectDb }

