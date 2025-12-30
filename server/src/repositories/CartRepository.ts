import { Cart, NewCart, UpdatedCart } from "src/types/entities/cart.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class CartRepository extends BaseRepository<Cart, NewCart, UpdatedCart>{
    protected async selectAll(): Promise<QueryResult<Cart>> {
        const query = 'SELECT * FROM carts';
        const result = await pool.query(query);
        return result;
    }

    protected async selectById(cartId: number): Promise<QueryResult<Cart>> {
        const value = [cartId];
        const query = 'SELECT * FROM carts WHERE cart_id = $1';
        const result = await pool.query(query, value);
        return result;
    }

    protected async insert(newCart: NewCart): Promise<QueryResult<Cart>> {
        const values = [newCart.customer_id];
        const query = 'INSERT INTO carts(customer_id) VALUES($1) RETURNING *';

        const result = await pool.query(query, values);
        return result;
    }

    protected async update(updatedCart: UpdatedCart): Promise<QueryResult<Cart>> {
        const values = [updatedCart.customer_id, updatedCart.status];
        const query = 'UPDATE carts SET customer_id = $1, status = $2 RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async deleteById(cartId: number): Promise<QueryResult<Cart>> {
        const value = [cartId];
        const query = 'DELETE FROM carts WHERE cart_id = $1 RETURNING *';
        const result = pool.query(query, value);
        return result;
    }
}