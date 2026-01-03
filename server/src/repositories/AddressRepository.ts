import {
  Address,
  AddressKey,
  NewAddress,
  UpdatedAddress,
} from "src/types/entities/address.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class AddressRepository extends BaseRepository<
  Address,
  NewAddress,
  UpdatedAddress,
  AddressKey,
  DomainTypes
> {
  protected domain: DomainTypes = 'address';
}
