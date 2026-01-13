import mongoose from 'mongoose';

export async function connectToDatabase() {
  // Hardcoded for now to bypass the environment variable issue
  const MONGODB_URI = "mongodb+srv://abdulmuizz826_db_user:QF0yBFhsY4lqS2rE@cluster0.ntg0nqv.mongodb.net/?appName=Cluster0";

  if (mongoose.connection.readyState >= 1) return mongoose.connection;

  try {
    console.log("Connecting to MongoDB via Hardcoded URI...");
    return await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}