export interface Product {
  product_id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  discount_percentage: number;
  stock: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface NewProduct {
  category_id: number;
  name: string;
  description: string;
  price: number;
  discount_percentage: number;
  stock: number;
}

export interface UpdatedProduct {
  category_id: number;
  name: string;
  description: string;
  price: number;
  discount_percentage: number;
  stock: number;
  is_active: boolean;
}

export type ProductKey = Pick<Product, 'product_id'>;
