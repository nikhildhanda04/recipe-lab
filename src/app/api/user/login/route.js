import connectDB from '../../../../lib/dbconnection';
import User from '../../../../lib/model/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectDB();
        
        const { email, password } = await request.json();
        // console.log();
        
        
        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: "All fields are mandatory" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        const user = await User.findOne({ email });
        
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
            
            return new Response(
                JSON.stringify({ accessToken }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        } else {
            return new Response(
                JSON.stringify({ error: "Email or Password is not valid" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }
        
    } catch (error) {
        console.error("Login error:", error);
        return new Response(
            JSON.stringify({ error: error.message || "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}