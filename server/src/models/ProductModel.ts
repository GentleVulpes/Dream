import { Pool, QueryResult } from "pg";
import { pool } from "../database/index.js";
import { Product } from "../types/product.entity.js";
import { Log } from "../utils/Log.js";

export class ProductModel {
  static gerProductProperties(product: Product) {
    return [
      product.category_id,
      product.name,
      product.description,
      product.price,
      product.discount_percentage,
      product.stock,
      product.is_active,
      product.created_at || new Date(),
      product.updated_at || new Date(),
    ];
  }

  static async insert(product: Product): Promise<Product | null> {
    const { product_id, ...properties } = product;
    const values = Object.values(properties);

    const query = `INSERT INTO product(category_id, name, description, price, discount_percentage, stock, is_active, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

    try {
      const result = await pool.query(query, values);
      if (result.rows.length > 0) {
        Log.writeInformation(
          `Product created with ID: ${result.rows[0].id || "unknown"}`
        );
        return result.rows[0];
      } else return null;
    } catch (error) {
      if (error instanceof Error){
        Log.writeError("Error inserting product:", error);
        console.error('Error inserting product:', error);
      }
      return null;
    }
  }

  static async readById(id: number): Promise<Product | null> {
    if (!id) return null;
    const query = `SELECT * FROM products WHERE product_id = $1`;
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length > 0) {
        Log.writeInformation(`Reading product of id ${id}`);
        return result.rows[0] as Product;
      } else return null;
    } catch (error) {
      const message = "error reading table products:";
      if (error instanceof Error) {
        Log.writeError(message, error);
        console.error(error);
      }
      return null;
    }
  }

  static async update(product: Product) {
    const values = Object.values(product);
    const query = `UPDATE products SET category_id = $2, name = $3, description = $4, price = $5, discount_percentage = $6, stock = $7, is_active = $8, created_at = $9, updated_at = $10 WHERE product_id = $1`;
    try {
      const result = await pool.query(query, values);
      if (!result) {
        Log.writeError(`Error inserting product:`, new Error("Invalid query!"));
        console.error("Error inserting product: Invalid query!");
        return null;
      }

      if (result.rows.length > 0) {
        Log.writeInformation(
          `Product of ID ${product.product_id} was sucessful inserted!`
        );
        return result.rows[0];
      }
    } catch (error) {
      if (error instanceof Error) {
        Log.writeError("Error removing product:", error);
        console.error("Error removing product:", error);
      }
      return null;
    }
  }

  static async deleteById(id: number) {
    const query = `DELETE FROM products WHERE product_id = $1`;
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length > 0) return result.rows[0];
      else return null;
    } catch (error) {
      if (error instanceof Error) {
        Log.writeError("Error deleting product:", error);
        console.error("Error deleting product:", error);
      }
      return null;
    }
  }
}
