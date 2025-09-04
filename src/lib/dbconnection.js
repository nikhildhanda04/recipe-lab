import mongoose from 'mongoose';

const connectDB = async () => {

    if (mongoose.connections[0].readyState) {
        return;
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