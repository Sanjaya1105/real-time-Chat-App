import express from 'express';
import { signup, logout, login } from '../controllers/authController.js';

const route = express.Router();

route.post('/signup', signup);
route.post('/login', login);
route.get('/logout', logout);

export default route;
