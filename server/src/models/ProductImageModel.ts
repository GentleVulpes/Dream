import { ProductImage } from "../types/entities/productImage.entity.js";
import { Log } from "../utils/Log.js";
import { pool } from "../database/index.js";

export class ProductImageModel {
    static async insert(productImage: ProductImage) {
        const values = [
            productImage.image_id,
            productImage.product_id,
            productImage.urls,
            productImage.alt_text,
            productImage.is_cover,
            productImage.display_order,
        ];

        const query = "INSERT INTO product_images(image_id, product_id, urls, alt_text, is_cover, display_order) VALUES ($1, $2, $3, $4, $5, $6)";

        try{
            const result = await pool.query(query, values);
            if(!result){
                const message = 'error inserting product image, invalid query!';
                Log.writeError('Error on insert:', new Error(message));
                console.error("Error:", message)
                return null;
            } 
        }catch(error) {

        }
    }
    static async readByImageId() {}
    static async readByProductId() {}
    static async update() {}
    static async deleteByImageId() {}
}