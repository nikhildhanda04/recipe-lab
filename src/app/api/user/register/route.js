import connectDB from '@/lib/dbConnection';
import User from '@/lib/models/User';
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        await connectDB();
        
        const { username, email, password } = await request.json();
        
        // Validation
        if (!username || !email || !password) {
            return Response.json(
                { error: "All fields are mandatory" }, 
                { status: 400 }
            );
        }
        
        // Check if user exists
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            return Response.json(
                { error: "User is already registered!" }, 
                { status: 400 }
            );
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);
        
        // Create user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        
        console.log(`User Created Successfully!! ${newUser}`);
        
        if (newUser) {
            return Response.json(
                { 
                    _id: newUser.id, 
                    email: newUser.email 
                }, 
                { status: 201 }
            );
        } else {
            return Response.json(
                { error: "User Data Invalid!!" }, 
                { status: 400 }
            );
        }
        
    } catch (error) {
        console.error("Registration error:", error);
        return Response.json(
            { error: error.message || "Internal server error" }, 
            { status: 500 }
        );
    }
}