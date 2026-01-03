import { AppError } from "src/errors/AppError.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";
import { BaseRepository } from "src/repositories/BaseRepository.js";

export abstract class BaseService<
  T extends object,
  N extends object,
  U extends object,
  K extends object,
  D extends DomainTypes
> {
  protected abstract domain: D;
  constructor(protected repository: BaseRepository<T, N, U, K, D>) {}

  public async getAll(): Promise<T[]> {
    try {
      const result = await this.repository.selectAll();
      return result.rows;
    } catch (error: any) {
      this.handleErrors(error);
      throw error;
    }
  }

  public async getById(id: K): Promise<T> {
    try {
      const result = await this.repository.selectById(id);
      if (!result.rows[0]) {
        throw new AppError(this.domain, "NOT_FOUND");
      }
      return result.rows[0];
    } catch (error: any) {
      this.handleErrors(error);
      throw error;
    }
  }

  public async create(entity: N): Promise<T> {
    try {
      await this.validateCreate(entity);
      const result = await this.repository.insert(entity);
      return result.rows[0];
    } catch (error: any) {
      this.handleErrors(error);
      throw error;
    }
  }

  public async update(entity: U, id: K): Promise<T> {
    try {
      await this.validateUpdate(entity);
      const exists = await this.getById(id);
      const result = await this.repository.update(entity, id);
      return result.rows[0];
    } catch (error) {
      this.handleErrors(error);
      throw error;
    }
  }
  public async delete(id: K): Promise<T> {
    try {
      const exists = await this.getById(id);
      const result = await this.repository.deleteById(id);
      return result.rows[0];
    } catch (error) {
      this.handleErrors(error);
      throw error;
    }
  }
  public abstract handleErrors(error: any): void;

  public handleDbErrors(error: any): void {
    if (error.code === "ECONNREFUSED" || error.message.includes("connect")) {
      throw new AppError(this.domain, "SERVICE_UNAVAILABLE" as any, error);
    }

    if (error.code === "28P01") {
      throw new AppError(this.domain, "INTERNAL_SERVER_ERROR" as any, error);
    }

    if (error.code === "57P03") {
      throw new AppError(this.domain, "SERVICE_UNAVAILABLE" as any, error);
    }

    if (error.code && error.code.startsWith("42")) {
      throw new AppError(this.domain, "INTERNAL_SERVER_ERROR" as any, error);
    }
  }
  protected async validateCreate(entity: N): Promise<void> {}
  protected async validateUpdate(entity: U): Promise<void> {}
}

