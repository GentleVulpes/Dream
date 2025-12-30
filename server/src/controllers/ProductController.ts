import { Request, Response } from "express";
import { ProductModel } from "../models/ProductModel.js";
import { Product } from "../types/entities/product.entity.js";
import { Log } from "../utils/Log.js";
export class ProductController {
  getProductProps(body: any): Product | null {
    if (body instanceof Object) {
      const {
        product_id,
        category_id,
        name,
        description,
        price,
        discount_percentage,
        stock,
        is_active,
      } = body;

      const newProduct: Product = {
        product_id,
        category_id,
        name,
        description,
        price,
        discount_percentage,
        stock,
        is_active,
        created_at: new Date(),
        updated_at: new Date(),
      };
    }
  // }
  async create(req: Request, res: Response) {
    const result = ProductModel.insert(
      this.getProductProps(req.body) as Product
    );
    if (!result) res.redirect("/admin/register_product");
  }
}
