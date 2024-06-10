const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../config');

// Create user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Authenticate user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ token });
        console.log("User logged with token: " + token);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Read user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
        console.log("User found: " + user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Update user
router.put('/:id', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
        res.status(200).json(updatedUser);
        console.log("User updated: " + updatedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('User deleted');
        console.log("User deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
