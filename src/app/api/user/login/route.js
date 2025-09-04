import connectDB from '../../../../lib/dbconnection';
import User from '../../../../lib/model/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectDB();
        
        const { email, password } = await request.json();
        
        // Validation
        if (!email || !password) {
            return Response.json(
                { error: "All fields are mandatory" }, 
                { status: 400 }
            );
        }
        
        // Find user
        const user = await User.findOne({ email });
        
        // Check user and password
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
            
            return Response.json(
                { accessToken }, 
                { status: 200 }
            );
        } else {
            return Response.json(
                { error: "Email or Password is not valid" }, 
                { status: 401 }
            );
        }
        
    } catch (error) {
        console.error("Login error:", error);
        return Response.json(
            { error: error.message || "Internal server error" }, 
            { status: 500 }
        );
    }
}