export interface Cart {
    cart_id: number;
    customer_id: number;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface NewCart {
    customer_id: number;
}

export interface UpdatedCart {
    customer_id: number;
    status: string;
}

export type CartKey = Pick<Cart, 'cart_id'>;

