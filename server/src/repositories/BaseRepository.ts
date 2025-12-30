import { DomainTypes, ErrorCatalog } from "../errors/ErrorCatalog.js";
import { AppError } from "../errors/AppError.js";
import { Pool, QueryResult } from "pg";
import { DbError } from "../types/errors/DbError.type.js";
import { pool } from "../database/index.js";

export abstract class BaseRepository<T extends object , N extends Object ,U extends Object, I = number | number[]> {

  protected abstract selectAll(): Promise<QueryResult<T>>;
  protected abstract selectById(id: I): Promise<QueryResult<T>>;
  protected abstract insert(entity: N): Promise<QueryResult<T>>;
  protected abstract update(entity: U): Promise<QueryResult<T>>;
  protected abstract deleteById(id: I): Promise<QueryResult<T>>;
}
