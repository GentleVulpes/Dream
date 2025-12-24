import { AddressErrors } from "./domains/AddressErrors.js";
import { CartErrors } from "./domains/CartErrors.js";
import { CartItemErrors } from "./domains/CartItemErrors.js";
import { CategoryErrors } from "./domains/CategoryErrors.js";
import { CustomerErrors } from "./domains/CustomerErrors.js";
import { ProductErrors } from "./domains/ProductErrors.js";
import { ProductImageErrors } from "./domains/ProductImageErrors.js";

export const ErrorCatalog = {
  Category: CategoryErrors,
  Product: ProductErrors,
  ProductImage: ProductImageErrors,
  Customer: CustomerErrors,
  Address: AddressErrors,
  Cart: CartErrors,
  CartItem: CartItemErrors,
} as const;

export type DomainTypes = keyof typeof ErrorCatalog;
