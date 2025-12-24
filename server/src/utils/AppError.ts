// src/utils/AppError.ts
import { ErrorCatalog, ErrorTypes } from '../constants/ErrorCatalog.js';

export class AppError extends Error {
  public readonly type: ErrorTypes;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(key: ErrorTypes, originalError?: unknown) {
    // Busca a definição no catálogo. Se não achar, usa um genérico.
    const errorDef = ErrorCatalog[key] || ErrorCatalog[ErrorTypes.INTERNAL_SERVER_ERROR];
    
    super(errorDef.message);
    
    this.type = key;
    this.statusCode = errorDef.httpStatus;
    this.isOperational = true;

  }
}