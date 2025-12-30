import { CartItem, NewCartItem, UpdatedCartItem } from "src/types/entities/cartItem.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class CartItemRepository extends BaseRepository<CartItem, NewCartItem, UpdatedCartItem>{
    protected async selectAll(): Promise<QueryResult<CartItem>> {
        const query = 'SELECT * FROM cart_items';
        const result = await pool.query(query);
        return result;
    }

    protected async selectById(idValues: number[]): Promise<QueryResult<CartItem>> {
        const query = 'SELECT * FROM cart_items WHERE cart_id';
        const result = await pool.query(query, idValues);
        return result;
    }

    protected async insert(newCartItem: NewCartItem): Promise<QueryResult<CartItem>> {
        const values = [
            newCartItem.cart_id,
            newCartItem.product_id,
            newCartItem.quantity,
            newCartItem.unity_price_at_moment,
        ];
        const query = 'INSERT INTO cart_items(cart_id, product_id, quantity, unity_price_at_moment) VALUES($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async update(updatedCartItem: UpdatedCartItem): Promise<QueryResult<CartItem>> {
        const values = [
            updatedCartItem.cart_id,
            updatedCartItem.product_id,
            updatedCartItem.quantity,
            updatedCartItem.unity_price_at_moment,
        ];
        const query = 'UPDATE cart_items SET cart_id = $1, product_id = $2, quantity = $3, unity_price_at_moment = $4 RETURNING *';
        const result = pool.query(query, values);
        return result;
    }

    protected async deleteById(cartItemIds: number[]): Promise<QueryResult<CartItem>> {
        const values = cartItemIds;
        const query = 'DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2';
        const result = await pool.query(query, values);
        return result;
    }
}