import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Cart');

export const CartErrors = {
    ...standardErrors,
    
}