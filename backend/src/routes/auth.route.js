import express from 'express';

const route = express.Router();

route.get('/signup', (req, res) => {
    res.send('Signup Page');
});

route.get('/login', (req, res) => {
    res.send('Login Page');
});

route.get('/Logout', (req, res) => {
    res.send('Logout Page');
});

export default route;