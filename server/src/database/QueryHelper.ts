import { AppError } from "../errors/AppError.js";
import { DbError } from "../types/DbError.type.js";
import { DomainTypes } from "../errors/ErrorCatalog.js";
import { pool } from "./index.js";

export class QueryHelper {
  private static verifyParams<T extends object>(
    entity: T,
    ignorekeys: string[] = [],
    domain: DomainTypes
  ) {
    const entries = Object.entries(entity);
    for (const [key, value] of entries) {
      if (ignorekeys.includes(key)) continue;
      if (key === "created_at" || key === "updated_at") continue;
      if (key.endsWith("_id") && value === undefined) continue;
      if (
        value === null ||
        value === undefined ||
        (typeof value === "string" &&
          (value as unknown as string).trim() === "")
      ) {
        console.warn(`Campo obrigatório faltando: ${key} em ${domain}`);
        throw new AppError(domain, "UNPROCESSABLE_ENTITY");
      }
    }
  }

  public static async querySingle<T extends object>(
    entity: T,
    query: string,
    domain: DomainTypes
  ) {
    const values = Object.values(entity);
    let result;
    try {
      this.verifyParams(entity, [], domain);
      result = await pool.query(query, values);
    } catch (error) {
      const dbError = error as DbError;

      if (error instanceof AppError) throw error;
      if (dbError.code === "23505")
        throw new AppError(domain, "ALREADY_EXISTS");
      if (dbError.code === "23503")
        throw new AppError(domain, "CONFLICT_INTEGRITY");
      if (dbError.code === "23502")
        throw new AppError(domain, "UNPROCESSABLE_ENTITY");
      if (
        dbError.code === "23514" ||
        dbError.code === "22P02" ||
        dbError.code === "22001" ||
        dbError.code === "22003"
      )
        throw new AppError(domain, "INVALID_DATA");
    }
  }
}
