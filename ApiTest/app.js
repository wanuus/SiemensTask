const express = require('express');
const app = express();
app.use(express.json());

//passwords can not be returned in real application

const userData = {
    id: 46643,
    name: 'user',
    email: 'user@gmail.com',
    password: 'user123',
    imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
};
let userData1 = {
    id: 46643,
    name: 'user',
    email: 'user@gmail.com',
    password: 'user123',
    imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
};

//AUTHENTICATE user
app.post('/api/v1/auth', (req, res) => {
    const { email, password } = req.body;
    if (email === 'user@gmail.com' && password === 'user123') {
        res.status(200).json({ token: 'eyJhbGciOiJI...' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

//CREATE user
app.post('/api/v1/users', (req, res) => {
    const { name, email, password } = req.body;

    //checking for valid registration info
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    //validation
    if (name === 'user' && email === 'user@gmail.com' && password === 'user123') {
        return res.status(200).json({
            message: 'User registered with success',
            token: 'eyJhbGciOiJI...'
        });
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
});

//GET user
app.get('/api/v1/users', (req, res) => {

    //retrieve token from headers
    const token = req.headers['authorization'];

    if (token === 'Bearer eyJhbGciOiJI...') {
        //valid, them return user data
        return res.status(200).json(userData);
    } else {
        //invalid
        return res.status(401).json({ error: 'Unauthorized access' });
    }
});

//PATCH user
app.patch('/api/v1/users', (req, res) => {
    const { name, email, password } = req.body;
    const token = req.headers['authorization'];

    // Checking for the token
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    const validToken = 'Bearer eyJhbGciOiJI...';
    if (token !== validToken) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    // Validate the request body for missing fields
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Assuming userData1 is the user object i want to update
    userData1.name = name;
    userData1.email = email;
    userData1.password = password;

    res.status(200).json({ message: 'User updated with success' });
});

//DELETE user
app.delete('/api/v1/users', (req, res) => {
    const token = req.headers['authorization'];

    // Checking fothe token
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    const validToken = 'Bearer eyJhbGciOiJI...';
    if (token !== validToken) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    res.status(200).json({ message: 'User deleted with success' });
});

//DELETE ALL users
app.delete('/api/v1/all-users', (req, res) => {
    const { key_admin } = req.body;

    // Checking for admin key and it is correct 
    const ADMIN_KEY = 'keyadmin123';
    if (key_admin !== ADMIN_KEY) {
        return res.status(403).json({ error: 'Forbidden: Invalid admin key' });
    }
    res.status(200).json({ message: 'Users deleted with success' });
});
module.exports = app;
