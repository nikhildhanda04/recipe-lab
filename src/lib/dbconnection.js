import mongoose from 'mongoose';

const connectDB = async () => {
  // Check if already connected
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB');
    return;
  }

  // Check if connection string exists
  if (!process.env.CONNECTION_STRING) {
    throw new Error('Please define the CONNECTION_STRING environment variable inside .env.local');
  }

  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export default connectDB;