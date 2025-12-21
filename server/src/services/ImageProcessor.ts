import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { ImageData } from "./imageData.model.js";

export async function readAll(img: ImageData): Promise<string[]> {
  const files = await fs.readdir(img.originSrc);
  const images = files.filter((file) => {
    const extention = path.extname(file).toLowerCase();
    return extention.includes(".png");
  });

  return images;
}

export function generateNameBySize(sufix: string, imgSrc: string): string {
  const { name, ext } = path.parse(imgSrc);
  return `${name}_${sufix}${ext}`;
}

//   static generateNamesBySize(img: Image): string[] {
//     const { name, ext } = path.parse(img.originSrc);
//     return img.sizes.map((size) => `${name}_${size.sufix}${ext}`);
//   }

export async function generateSizes(img: ImageData) {
  img.sizes.forEach(async (size) => {
    await sharp(img.originSrc)
      .resize(size.width, size.height, { fit: "contain" })
      .toFile(
        `${img.targetSrc}/${generateNameBySize(size.sufix, img.originSrc)}`
      );
  });
}
