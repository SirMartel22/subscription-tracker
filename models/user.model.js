import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLength: 2,
        maxLength: 30,
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 12,
        maxLength: 40,
        match: [/^\S+@\S+.\S+$/, "Please fill in a valid email"]
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: 5,
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User