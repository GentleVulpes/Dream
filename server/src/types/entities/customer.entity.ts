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
