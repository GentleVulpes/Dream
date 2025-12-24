import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Product');

export const ProductErrors = {
    ...standardErrors,
    
}