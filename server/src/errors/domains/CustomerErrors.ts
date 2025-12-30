import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Customer');

export const CustomerErrors = {
    ...standardErrors,

    INVALID_DOCUMENT: {
        message: "The provided document (CPF/CNPJ) is invalid.",
        httpStatus: 400
    },
    UNDERAGE_USER: {
        message: "User must be at least 18 years old to register.",
        httpStatus: 403 
    },
    ACCOUNT_SUSPENDED: {
        message: "This customer account is currently suspended.",
        httpStatus: 403
    }
}