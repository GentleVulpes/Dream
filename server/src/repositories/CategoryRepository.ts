import {
  Category,
  NewCategory,
  UpdatedCategory,
} from "src/types/entities/category.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class CategoryRepository extends BaseRepository<
  Category,
  NewCategory,
  UpdatedCategory
> {
  protected async selectAll(): Promise<QueryResult<Category>> {
    const query = "SELECT * FROM categories";
    const result = await pool.query(query);
    return result;
  }

  protected async selectById(
    categoryId: number
  ): Promise<QueryResult<Category>> {
    const value = [categoryId];
    const query = "SELECT * FROM categories WHERE category_id = $1";
    const result = await pool.query(query, value);
    return result;
  }

  protected async insert(
    newCategory: NewCategory
  ): Promise<QueryResult<Category>> {
    const value = [newCategory.name];
    const query = "INSERT INTO categories(name) VALUES ($1) RETURNING *";
    const result = await pool.query(query, value);
    return result;
  }

  protected async update(
    updatedCategory: UpdatedCategory
  ): Promise<QueryResult<Category>> {
    const values = [updatedCategory.name, updatedCategory.is_active, updatedCategory.category_id];
    const query = 'UPDATE categories SET name = $1, is_active = $2 WHERE category_id = $3 RETURNING *';
    const result = await pool.query(query, values);
    return result;
  }

  protected async deleteById(categoryId: number): Promise<QueryResult<Category>> {
    const value = [categoryId];  
    const query = 'DELETE FROM categories WHERE category_id = $1 RETURNING *';
    const result = await pool.query(query, value);
    return result;
  }
}
