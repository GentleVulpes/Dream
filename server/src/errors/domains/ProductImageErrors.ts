import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Product Image');

export const ProductImageErrors = {
    ...standardErrors,
    
}