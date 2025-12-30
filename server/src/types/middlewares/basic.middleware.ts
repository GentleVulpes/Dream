import { Request, Response, NextFunction } from "express"

export interface BasicMiddleware { ( req: Request, res: Response, next: NextFunction): void }
