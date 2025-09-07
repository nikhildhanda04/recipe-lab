import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a Username"]
    },
    email: {
        type: String,
        required: [true, "Please Add a EmailId"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
}, {
    timestamps: true
});


export default mongoose.models.User || mongoose.model("User", userSchema);

