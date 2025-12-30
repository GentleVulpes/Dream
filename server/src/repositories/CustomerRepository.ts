import {
  Customer,
  NewCustomer,
  UpdatedCustomer,
} from "src/types/entities/customer.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { QueryResult } from "pg";
import { pool } from "src/database/index.js";

export class CustomerRepository extends BaseRepository<
  Customer,
  NewCustomer,
  UpdatedCustomer
> {
  protected async selectAll(): Promise<QueryResult<Customer>> {
    const query = "SELECT * FROM customers";
    const result = await pool.query(query);
    return result;
  }

  protected async selectById(
    customerId: number
  ): Promise<QueryResult<Customer>> {
    const value = [customerId];
    const query = "SELECT * FROM customers WHERE customer_id = $1";
    const result = await pool.query(query, value);
    return result;
  }

  protected async insert(
    newCustomer: NewCustomer
  ): Promise<QueryResult<Customer>> {
    const values = [
      newCustomer.name,
      newCustomer.email,
      newCustomer.phone,
      newCustomer.birth_date,
      newCustomer.cpf,
      newCustomer.password_hash,
    ];
    const query =
      "INSERT INTO customers(name, email, phone, birth_date, cpf, password_hash) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const result = pool.query(query, values);
    return result;
  }

  protected async update(
    updatedCustomer: UpdatedCustomer
  ): Promise<QueryResult<Customer>> {
    const values = [
      updatedCustomer.name,
      updatedCustomer.email,
      updatedCustomer.phone,
      updatedCustomer.password_hash,
    ];
    const query = 'UPDATE customers SET name = $1, email = $2, phone = $3, password_hash = $4, updated_at = NOW()';
    const result = await pool.query(query, values);
    return result;
  }

  protected async deleteById(customerId: number): Promise<QueryResult<Customer>> {
      const value = [customerId];
      const query = 'DELETE FROM customers WHERE customer_id = $1 RETURNING *';
      const result = await pool.query(query, value);
      return result;
  }
}
