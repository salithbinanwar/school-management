import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(notFound);
app.use(errorHandler);

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})