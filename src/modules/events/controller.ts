import { Request, Response, NextFunction } from 'express';
import { getEvents } from './service';

export const eventsController = async (req: Request, res: Response) => {
    
    const queryParams = req.query;

    // could add a third party library for validation here. Maybe filter out any additional keys that the client may send

    try {
        const events = await getEvents(queryParams);
        res.send(events);

    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}