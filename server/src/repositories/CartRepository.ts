import { Cart, CartKey, NewCart, UpdatedCart } from "src/types/entities/cart.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class CartRepository extends BaseRepository<
  Cart,
  NewCart,
  UpdatedCart,
  CartKey,
  DomainTypes
> {
  protected domain: DomainTypes = 'cart';
}
