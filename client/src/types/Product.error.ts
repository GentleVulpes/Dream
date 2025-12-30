export const generateProductError = (labelName: string) => ({
  EMPTY_FIELD: { message: `${labelName} cannot be left empty`},
  ALREADY_EXISTS: { message: `this ${labelName} already exists.`},
  INVALID_PASSWORD: { message: `Invalid value.`},
}) as const;