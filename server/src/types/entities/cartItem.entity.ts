import { Cart } from "./cart.entity.js";

export interface CartItem {
    cart_id: number;
    product_id: number;
    quantity: number;
    unity_price_at_moment: number;
    created_at: Date;
    updated_at: Date;
}

export interface NewCartItem {
    cart_id: number;
    product_id: number;
    quantity: number;
    unity_price_at_moment: number;
}

export interface UpdatedCartItem {
    quantity: number;
    unity_price_at_moment: number;
}

export type CartItemKey = Pick<CartItem, 'cart_id' | 'product_id'>;