import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Category');

export const CategoryErrors = {
    ...standardErrors,
    
}