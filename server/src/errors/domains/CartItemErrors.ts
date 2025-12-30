import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Cart Item');

export const CartItemErrors = {
    ...standardErrors,

    INVALID_QUANTITY: {
        message: "Item quantity must be greater than zero.",
        httpStatus: 400 
    },
    MAX_QUANTITY_REACHED: {
        message: "You cannot add more of this item (limit reached).",
        httpStatus: 409
    }
}