import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                message: 'Invalid email format'
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false
        },

        profilePic:{
            type: String,
            default: "",
        },
    },{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;