import {
  Category,
  CategoryKey,
  NewCategory,
  UpdatedCategory,
} from "src/types/entities/category.entity.js";
import { BaseService } from "./BaseService.js";
import { CategoryRepository } from "src/repositories/CategoryRepository.js";
import { AppError } from "src/errors/AppError.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class CategoryService extends BaseService<
  Category,
  NewCategory,
  UpdatedCategory,
  CategoryKey,
  DomainTypes
> {
  protected domain: DomainTypes;

  constructor(repository: CategoryRepository) {
    super(repository);
    this.domain = "category";
  }

  public handleErrors(error: any): void {
    if (error.code === "23505") {
      if (error.constraint === "category_name_key") {
        throw new AppError(this.domain, "ALREADY_EXISTS");
      }
    }
    if (error.code === "23503") {
      if (error.constraint === "product_category_id_fkey") {
        throw new AppError(this.domain, "CANNOT_DISABLE_PARENT", error);
      }
    }
    super.handleDbErrors(error);
  }

  public async validateCreate(category: NewCategory): Promise<void> {
    if (!category.name || typeof category.name !== "string")
      throw new AppError(this.domain, "UNPROCESSABLE_ENTITY");
  }

  public async validateUpdate(updatedCategory: UpdatedCategory): Promise<void> {
    if (
      !updatedCategory.category_id ||
      typeof updatedCategory.category_id !== "number" ||
      updatedCategory.is_active === undefined || updatedCategory.is_active === null ||
      typeof updatedCategory.is_active !== "boolean" ||
      !updatedCategory.name ||
      typeof updatedCategory.name !== "string"
    )
      throw new AppError(this.domain, "UNPROCESSABLE_ENTITY");
  }
}
