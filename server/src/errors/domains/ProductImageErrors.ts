import { createDomainErrors } from "../ErrorFactory.js";

const standardErrors = createDomainErrors('Product Image');

export const ProductImageErrors = {
    ...standardErrors,

    MAX_IMAGES_EXCEEDED: {
        message: "Maximum number of images for this product has been reached.",
        httpStatus: 409
    },
    INVALID_IMAGE_FORMAT: {
        message: "Only JPG, PNG and WEBP formats are allowed.",
        httpStatus: 415 
    },
    FILE_TOO_LARGE: {
        message: "Image file size exceeds the maximum allowed limit.",
        httpStatus: 413 
    }
}