export const createDomainErrors = (entityName: string) =>
  ({

    NOT_FOUND: {
      message: `${entityName} not found.`,
      httpStatus: 404,
    },

    ALREADY_EXISTS: {
      message: `${entityName} already exists.`,
      httpStatus: 409,
    },

    CONFLICT_INTEGRITY: {
      message: `Cannot delete ${entityName} because it is referenced by other records.`,
      httpStatus: 409,
    },

    CANNOT_DISABLE_PARENT: {
      message: `Cannot disable or delete ${entityName} because it contains active sub-items or dependencies.`,
      httpStatus: 409,
    },

    UNPROCESSABLE_ENTITY: {
      message: `Required parameters for ${entityName} are missing or violate business rules.`,
      httpStatus: 422,
    },

    INVALID_DATA: {
      message: `Invalid data format provided for ${entityName}.`,
      httpStatus: 400,
    },

    IMMUTABLE_FIELD: {
      message: `One or more fields in ${entityName} cannot be changed.`,
      httpStatus: 400,
    },

    STATE_CONFLICT: {
      message: `The ${entityName} has been modified by another process. Please refresh and try again.`,
      httpStatus: 409,
    },

    AUTHENTICATION_REQUIRED: {
      message: `Authentication is required to access ${entityName}.`,
      httpStatus: 401,
    },

    FORBIDDEN_ACCESS: {
      message: `You do not have permission to perform this action on ${entityName}.`,
      httpStatus: 403,
    },

    SERVICE_UNAVAILABLE: {
      message: "The service is currently unavailable. Please try again later.",
      httpStatus: 503,
    },

    INTERNAL_SERVER_ERROR: {
      message: "An unexpected internal error occurred.",
      httpStatus: 500,
    }

  } as const);