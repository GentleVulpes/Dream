import {
  NewProduct,
  Product,
  ProductKey,
  UpdatedProduct,
} from "src/types/entities/product.entity.js";
import { BaseService } from "./BaseService.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";
import { ProductRepository } from "src/repositories/ProductRepository.js";
import { AppError } from "src/errors/AppError.js";

export class ProductService extends BaseService<
  Product,
  NewProduct,
  UpdatedProduct,
  ProductKey,
  DomainTypes
> {
  protected domain: DomainTypes;

  constructor(repository: ProductRepository) {
    super(repository);
    this.domain = "product";
  }

  public handleErrors(error: any): void {
   // 1. Erro de Chave Estrangeira (Código Postgres 23503)
    // Acontece ao tentar criar um produto numa categoria que não existe
    if (error.code === "23503") {
      if (error.constraint === "product_category_id_fkey") {
        // Usamos INVALID_DATA pois o ID da categoria fornecido é inválido
        throw new AppError(this.domain, "INVALID_DATA", error);
      }
    }

    if (error.code === "23514") {
      
      if (error.constraint?.includes("discount")) {
        throw new AppError(this.domain , "INVALID_DISCOUNT");
      }
      
      // Constraint: stock >= 0
      if (error.constraint?.includes("stock")) {
        // Não tens erro específico para stock, usamos INVALID_DATA ou UNPROCESSABLE_ENTITY
        throw new AppError(this.domain, "INVALID_DATA");
      }
    }
    super.handleDbErrors(error);
  }

  protected async validateCreate(newProduct: NewProduct): Promise<void> {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.discount_percentage ||
      !newProduct.stock ||
      !newProduct.category_id ||
      typeof newProduct.name !== "string" ||
      typeof newProduct.description !== "string" ||
      typeof newProduct.price !== "number" ||
      typeof newProduct.discount_percentage !== "number" ||
      typeof newProduct.stock !== "number" ||
      typeof newProduct.category_id !== "number"
    )
      throw new AppError(this.domain, "UNPROCESSABLE_ENTITY");
  }

  protected async validateUpdate(
    updatedProduct: UpdatedProduct
  ): Promise<void> {
    if (
      !updatedProduct.name ||
      !updatedProduct.description ||
      !updatedProduct.is_active ||
      !updatedProduct.price ||
      !updatedProduct.discount_percentage ||
      !updatedProduct.stock ||
      !updatedProduct.category_id ||
      typeof updatedProduct.name !== "string" ||
      typeof updatedProduct.description !== "string" ||
      typeof updatedProduct.is_active !== "boolean" ||
      typeof updatedProduct.price !== "number" ||
      typeof updatedProduct.discount_percentage !== "number" ||
      typeof updatedProduct.stock !== "number" ||
      typeof updatedProduct.category_id !== "number"
    )
      throw new AppError(this.domain, "UNPROCESSABLE_ENTITY");
  }
}
