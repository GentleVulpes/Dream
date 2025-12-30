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
    cart_id: number;
    product_id: number;
    quantity: number;
    unity_price_at_moment: number;
}