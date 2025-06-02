const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({ message: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({name, email, password: hashedPassword});
        
        res.status(201).json({message: 'User Registered Successfully ', user: newUser});

    } catch (error) {
        res.status(500).json({message: 'Error registering user', error: error.message});
    }
};

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: 'User not found '});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json.message({message: 'Invalid credentials '});

        const token = jwt.sign({userId: user._id},process.env.JWT_SECRET, {expiresIn: '1d'});

        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email}});
        
    } catch (error) {
        res.status(500).json({message: 'Error Logging in user',error: error.message})
    }
};

module.exports = { registerUser, loginUser};
