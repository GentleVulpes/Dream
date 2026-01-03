import {
  CartItem,
  CartItemKey,
  NewCartItem,
  UpdatedCartItem,
} from "src/types/entities/cartItem.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class CartItemRepository extends BaseRepository<
  CartItem,
  NewCartItem,
  UpdatedCartItem,
  CartItemKey,
  DomainTypes
> {
  protected domain: DomainTypes = 'cart_item';
}
