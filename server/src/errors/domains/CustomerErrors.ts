import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Customer');

export const CustomerErrors = {
    ...standardErrors,
    
}