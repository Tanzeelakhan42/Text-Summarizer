import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let dbUrl = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed", error);
  }
};

export default connectDb;
