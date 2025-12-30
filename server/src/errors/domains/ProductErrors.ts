import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Product');

export const ProductErrors = {
    ...standardErrors,

    NEGATIVE_PRICE: {
        message: "Product price cannot be negative or zero.",
        httpStatus: 400
    },
    INVALID_DISCOUNT: {
        message: "Discount price cannot be higher than or equal to the original price.",
        httpStatus: 422
    },
    SKU_REQUIRED: {
        message: "A unique SKU (Stock Keeping Unit) is required for inventory management.",
        httpStatus: 422
    } 
} as const;