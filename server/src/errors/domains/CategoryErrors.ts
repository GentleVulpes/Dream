import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Category');

export const CategoryErrors = {
    ...standardErrors,

    CYCLIC_HIERARCHY: {
        message: "A category cannot be a parent/child of itself or create a circular reference.",
        httpStatus: 422
    },
    CANNOT_DISABLE_PARENT: {
        message: "Cannot disable a category that has active subcategories.",
        httpStatus: 409
    }
}