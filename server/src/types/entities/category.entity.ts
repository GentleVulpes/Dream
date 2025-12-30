export interface Category {
  category_id: number;
  name: string;
  is_active: boolean;
}

export interface NewCategory {
  name: string,
}

export interface UpdatedCategory {
  category_id: number;
  name: string,
  is_active: boolean
}