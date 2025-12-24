import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError.js';

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            domain: error.domain,
            type: error.type,
            message: error.message,
            timeStamp: new Date().toISOString(),
        });
    }

    console.error('CRITICAL ERROR:', error);
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        stack: process.env.NODE_ENV === 'development' ? error.stack: undefined,
    });
}