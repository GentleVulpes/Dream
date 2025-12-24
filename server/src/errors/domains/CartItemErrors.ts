import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Cart Item');

export const CartItemErrors = {
    ...standardErrors,
    
}