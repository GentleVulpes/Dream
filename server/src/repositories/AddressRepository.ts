import { Address, NewAddress, UpdatedAdress } from "src/types/entities/address.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class AdressRepository extends BaseRepository<Address, NewAddress, UpdatedAdress>{
    protected async selectAll(): Promise<QueryResult<Address>> {
        const query = 'SELECT * FROM addresses';
        const result = await pool.query(query);
        return result;
    }

    protected async selectById(addressId: number): Promise<QueryResult<Address>> {
        const value = [addressId];
        const query = 'SELECT * FROM addresses WHERE address_id = $1';
        const result = pool.query(query, value);
        return result;
    }

    protected async insert(newAddress: NewAddress): Promise<QueryResult<Address>> {
        const values = [
            newAddress.customer_id,
            newAddress.label,
            newAddress.street,
            newAddress.number,
            newAddress.complement,
            newAddress.district,
            newAddress.city,
            newAddress.state,
            newAddress.zip_code
        ];
        const query = 'INSERT INTO addresses(customer_id, label, street, number, complement, district, city, state, zip_code) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async update(updatedAdress: UpdatedAdress): Promise<QueryResult<Address>> {
        const values = [
            updatedAdress.label,
            updatedAdress.street,
            updatedAdress.number,
            updatedAdress.complement,
            updatedAdress.district,
            updatedAdress.city,
            updatedAdress.state,
            updatedAdress.zip_code
        ];
        const query = 'UPDATE addresses SET label = $1, street = $2, number = $3, complement = $4, district = $5, city = $6, state = $7, zip_code = $8, updated_at = NOW() RETURNING *';
        const result = await pool.query(query, values);
        return result;
    }

    protected async deleteById(addressId: number): Promise<QueryResult<Address>> {
        const value = [addressId];
        const query = 'DELETE FROM addresses WHERE address_id = $1 RETURNING *';
        const result = await pool.query(query, value);
        return result;
    }


}