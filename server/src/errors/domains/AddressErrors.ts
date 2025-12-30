import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Address');

export const AddressErrors = {
    ...standardErrors,

    ZIP_CODE_INVALID: {
        message: "The provided Zip Code (CEP) format is invalid.",
        httpStatus: 400
    },
    OUT_OF_DELIVERY_RANGE: {
        message: "Delivery is not available for this Zip Code region.",
        httpStatus: 422
    },
    MAX_ADDRESSES_REACHED: {
        message: "Maximum number of saved addresses reached for this customer.",
        httpStatus: 409
    }
}