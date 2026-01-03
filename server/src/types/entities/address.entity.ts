export interface Address {
    address_id: number;
    customer_id: number;
    label: string;
    is_default: boolean;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zip_code: string;
    created_at: Date;
    updated_at: Date;
}

export interface NewAddress {
    customer_id: number;
    label: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zip_code: string;
}

export interface UpdatedAddress {
    label: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zip_code: string;
}

export type AddressKey = Pick<Address, 'address_id' | 'customer_id'>;