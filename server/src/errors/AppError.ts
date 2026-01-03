import { error } from "node:console";
import { ErrorResponse } from "../types/errors/ErrorResponse.type.js";
import { ErrorCatalog, DomainTypes } from "./ErrorCatalog.js";

export class AppError<D extends DomainTypes> extends Error {
    public readonly statusCode: number;
    public readonly domain: D;
    public readonly type: string;
    public readonly isOperational: boolean;


    constructor(domain: D, type: keyof(typeof ErrorCatalog)[D], originalError?: unknown){
        const domainErrors = ErrorCatalog[domain];
        const errorDef = domainErrors[type as keyof typeof domainErrors] as ErrorResponse;

        if(!errorDef) {
            super('Unknown Error');
            this.statusCode = 500;      
            this.domain = domain;
            this.type = 'UNKNOWN';
            this.isOperational = false;
            return;
        }

        super(errorDef.message);
        this.statusCode = errorDef.httpStatus;
        this.domain = domain;
        this.type = String(type);
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);

        if(originalError && process.env.NODE_ENV === 'development') {
            console.debug('Original Error Stack:', originalError);
        }
    }
}