import express from 'express';
import dotenve from 'dotenv';
import authRoutes from './routes/auth.route.js'
import {connectDB} from './lib/db.js'

dotenve.config();
const app = express();
const PORT = process.env.PORT;

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
export default app;