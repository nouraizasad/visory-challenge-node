import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { eventsController } from './modules/events/controller';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.get('/api/events', eventsController);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});