import { QueryResult } from "pg";
import { pool } from "src/database/index.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

type domain = 'product' | 'category' | 'cart' | 'cart_item' | 'customer' | 'address' | 'product_image'
export abstract class BaseRepository<
  T extends object,
  N extends Object,
  U extends Object,
  K extends Object,
  D extends DomainTypes
> {
  protected abstract domain: D;
  // public abstract selectAll(): Promise<QueryResult<T>>;
  public async selectAll() {
    const query = `SELECT * FROM ${this.domain}`;
    const result = await pool.query(query);
    return result;
  }

  public async selectById(id: K) {
    const keys = Object.keys(id);
    const conditions = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(" AND ");
    const query = `SELECT * FROM ${this.domain} WHERE ${conditions}`
    const result = await pool.query(query);
    return result;
  }

  public async insert(entity: N): Promise<QueryResult<T>> {
    const entries = Object.entries(entity);
    const keys = entries.map(([key, value]) => key).join(', ');
    const indexes = entries.map((entry, index) => `$${index + 1}`).join(', ');
    const values = entries.map(([key, value]) => value);
    const query = `INSERT INTO ${this.domain}(${keys}) VALUES(${indexes}) RETURNING *`;
    const result = await pool.query(query, values);
    return result;
  }


  public async update(entity: U, ids: K): Promise<QueryResult<T>>{
    const entityEntries = Object.entries(entity);
    const assignments = entityEntries.map(([key, value], index) => `${key} = $${index + 1}`).join(', '); 
    const entityValues = entityEntries.map(([key, value]) => value);
    
    const idEntries = Object.entries(ids);
    const idValues = idEntries.map(([key, value]) => value);
    
    let accumulator = entityEntries.length + 1; 
    const conditions = idEntries.map(([key, value]) => {
      const condition = `${key} = $${accumulator}`;
      accumulator++;
      return condition;
    }).join(' AND ');
    
    const query = `UPDATE ${this.domain} SET ${assignments} WHERE ${conditions} RETURNING *`;
    const result = await pool.query(query, [...entityValues, ...idValues]);
    return result;
  }

  public async deleteById(id: K): Promise<QueryResult<T>> {
    const keys = Object.keys(id);
    const values = Object.values(id);
    const conditions = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(" AND ");
    const query = `DELETE FROM ${this.domain} WHERE ${conditions} RETURNING *`;
    const result = await pool.query(query, values);
    return result;
  }

}
