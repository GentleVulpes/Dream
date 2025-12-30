import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Cart');

export const CartErrors = {
    ...standardErrors,
    EMPTY_CART: {
        message: "Cannot perform checkout with an empty cart.",
        httpStatus: 409
    },
    STOCK_EXCEEDED: {
        message: "One or more items in the cart exceed the available stock.",
        httpStatus: 409
    },
    PRODUCT_INACTIVE: {
        message: "One or more products in the cart are no longer active or available.",
        httpStatus: 409
    },
    COUPON_INVALID: {
        message: "The provided coupon code is invalid or expired.",
        httpStatus: 422
    }
    
}