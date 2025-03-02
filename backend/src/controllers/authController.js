import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {

        if (!fullName || !email|| !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        // Check password length
        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password too short' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ fullName, email, password: hashedPassword });

        // Save user to database
        await newUser.save();

        // Generate JWT token
        const token = generateToken(newUser._id);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            token: token,
            profilePic: newUser.profilePic || '',
            message: 'User created successfully'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = (req, res) => {
    res.send("Login page");
};

export const logout = (req, res) => {
    res.send("Logout page");
};
