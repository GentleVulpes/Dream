import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Address');

export const AddressErrors = {
    ...standardErrors,
    
}