  import { pool } from "src/database/index.js";
  import {
    Product,
    NewProduct,
    UpdatedProduct,
  } from "../types/entities/product.entity.js";
  import { BaseRepository } from "./BaseRepository.js";
  import { QueryResult } from "pg";

  export class ProductRepository extends BaseRepository<Product, NewProduct, UpdatedProduct> {
    protected async selectAll(): Promise<QueryResult<Product>> {
      const query = "SELECT * FROM products";
      const result = await pool.query<Product>(query);
      return result;
    } 
    protected async selectById(productId: number): Promise<QueryResult<Product>> {
      const value = [productId];
      const query = "SELECT * FROM products WHERE product_id = $1";
      const result = await pool.query<Product>(query, value);
      return result;
    }
      protected async insert(product: NewProduct): Promise<QueryResult<Product>> {
        const values = [
          product.category_id,
          product.name,
          product.description,
          product.price,
          product.discount_percentage,
          product.stock,
        ];
        const query =
          "INSERT INTO products (category_id, name, description, price, discount_percentage, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const result = await pool.query(query, values);
        return result;
      }
    protected async update(   
      product: UpdatedProduct
    ): Promise<QueryResult<Product>> {
      const values = [
        product.category_id,
        product.name,
        product.description,
        product.price,
        product.discount_percentage,
        product.stock,
        product.is_active,
        product.product_id,
      ];
      const query =
        "UPDATE products SET category_id = $1, name = $2, description = $3, price = $4, discount_percentage = $5, stock = $6, is_active = $7, updated_at = NOW() WHERE product_id = $8 RETURNING *";

      const result = await pool.query(query, values);
      return result;
    }
    protected async deleteById(id: number): Promise<QueryResult<Product>> {
      const value = [id];
      const query = "DELETE FROM products WHERE product_id=$1 RETURNING *";
      const result = await pool.query(query, value);
      return result;
    }
  }
