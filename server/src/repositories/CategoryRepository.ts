import {
  Category,
  CategoryKey,
  NewCategory,
  UpdatedCategory,
} from "src/types/entities/category.entity.js";
import { BaseRepository } from "./BaseRepository.js";
import { DomainTypes } from "src/errors/ErrorCatalog.js";

export class CategoryRepository extends BaseRepository<
  Category,
  NewCategory,
  UpdatedCategory,
  CategoryKey,
  DomainTypes
> {
  protected domain: DomainTypes = 'category';
}
