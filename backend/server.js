import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use('/api/users', userRoutes);

connectDB()

app.use(notFound);
app.use(errorHandler);
app.use(express.json)
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})