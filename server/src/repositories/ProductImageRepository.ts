import {
  NewProductImage,
  ProductImage,
  ProductImageKey,
  UpdatedProductImage,
} from "src/types/entities/productImage.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class ProductImageRepository extends BaseRepository<
  ProductImage,
  NewProductImage,
  UpdatedProductImage,
  ProductImageKey,
  DomainTypes
> {
  protected domain: DomainTypes = 'product_image';
}
