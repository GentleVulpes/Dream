import { AddressErrors } from "./domains/AddressErrors.js";
import { CartErrors } from "./domains/CartErrors.js";
import { CartItemErrors } from "./domains/CartItemErrors.js";
import { CategoryErrors } from "./domains/CategoryErrors.js";
import { CustomerErrors } from "./domains/CustomerErrors.js";
import { ProductErrors } from "./domains/ProductErrors.js";
import { ProductImageErrors } from "./domains/ProductImageErrors.js";

export const ErrorCatalog = {
  category: CategoryErrors,
  product: ProductErrors,
  product_image: ProductImageErrors,
  customer: CustomerErrors,
  address: AddressErrors,
  cart: CartErrors,
  cart_item: CartItemErrors,
} as const;

export type DomainTypes = keyof typeof ErrorCatalog;
