import { Request, Response } from "express";
import { ProductModel } from "../models/ProductModel.js";
import { Product } from "../types/product.entity.js";
import { Log } from "../utils/Log.js";
export class ProductController {
  getProductProps(body: any): Product | null {
    if(!body) return null;
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

      if (
        !newProduct.product_id ||
        !newProduct.category_id ||
        !newProduct.name ||
        !newProduct.description ||
        !newProduct.price ||
        !newProduct.discount_percentage ||
        !newProduct.stock ||
        !newProduct.is_active ||
        !newProduct.created_at ||
        !newProduct.updated_at
      ) {
        Log.writeError(
          "Error inserting new product:",
          new Error("invalid values from form")
        );
        console.error("Error inserting new product: invalid values from form");
        return null;
      }
      return newProduct;
    }
  }
  async create(req: Request, res: Response) {
    const result = ProductModel.insert(
      this.getProductProps(req.body) as Product
    );
    if (!result) res.redirect("/admin/register_product");
  }
}
