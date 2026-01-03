export interface ProductImage {
  image_id: number;
  product_id: number;
  urls: string[];
  alt_text: string;
  is_cover: boolean;
  display_order: number;
}

export interface NewProductImage {
  product_id: number;
  urls: string[];
  alt_text: string;
}

export interface UpdatedProductImage {
  image_id: number;
  product_id: number;
  urls: string[];
  alt_text: string;
  is_cover: boolean;
  display_order: number;
}

export type ProductImageKey = Pick<ProductImage, 'image_id' | 'product_id'>;