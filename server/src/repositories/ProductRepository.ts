import { pool } from "src/database/index.js";
import {
  Product,
  NewProduct,
  UpdatedProduct,
  ProductKey,
} from "../types/entities/product.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class ProductRepository extends BaseRepository<
  Product,
  NewProduct,
  UpdatedProduct,
  ProductKey,
  DomainTypes
> {
 protected domain: DomainTypes = 'product';
}
