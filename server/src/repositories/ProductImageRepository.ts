import { NewProductImage, ProductImage, UpdatedProductImage } from "src/types/entities/productImage.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class ProductImageRepository extends BaseRepository<ProductImage, NewProductImage, UpdatedProductImage>{
    protected async selectAll(): Promise<QueryResult<ProductImage>> {
        const query = 'SELECT * FROM product_images';
        const result = await pool.query(query);
        return result;
    }

    protected async selectById(productImageId: string): Promise<QueryResult<ProductImage>> {
        const value = [productImageId];
        const query = 'SELECT * FROM product_images WHERE image_id = $1';
        const result = await pool.query(query, value);
        return result;
    }

    protected async insert(newProductImage: NewProductImage): Promise<QueryResult<ProductImage>> {
        const values = [
            newProductImage.product_id,
            newProductImage.alt_text,
            newProductImage.urls
        ];
        const query = 'INSERT INTO product_images(product_id, alt_text, urls) VALUES($1, $2, $3) RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async update(updatedProductImage: UpdatedProductImage): Promise<QueryResult<ProductImage>> {
        const values = [
            updatedProductImage.product_id,
            updatedProductImage.alt_text,
            updatedProductImage.urls,
            updatedProductImage.is_cover,
            updatedProductImage.display_order,
        ];
        const query = 'UPDATE product_images SET product_id = $1, alt_text = $2, urls = $3, is_cover = $4, display_order = $5 RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async deleteById(productImageId: number): Promise<QueryResult<ProductImage>> {
        const value = [productImageId];
        const query = 'DELETE FROM product_images WHERE image_id = $1 RETURNING *';
        const result = await pool.query(query, value);
        return result;
    }
}