import {
  Customer,
  CustomerKey,
  NewCustomer,
  UpdatedCustomer,
} from "src/types/entities/customer.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class CustomerRepository extends BaseRepository<
  Customer,
  NewCustomer,
  UpdatedCustomer,
  CustomerKey,
  DomainTypes
> {
  protected domain: DomainTypes = "customer";
}
