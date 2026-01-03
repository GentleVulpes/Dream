export interface Customer {
  customer_id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  birth_date: Date;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export interface NewCustomer {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  birth_date: Date;
  password_hash: string;
}

export interface UpdatedCustomer {
  customer_id: number;
  name: string;
  email: string;
  phone: string;
  password_hash: string;
}

export type CustomerKey = Pick<Customer, 'customer_id'>