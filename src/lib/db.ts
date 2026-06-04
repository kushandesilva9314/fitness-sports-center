import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    
    const uri = MONGODB_URI.startsWith("mongodb+srv://")
      ? MONGODB_URI
      : MONGODB_URI.replace("mongodb://", "mongodb+srv://");

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};