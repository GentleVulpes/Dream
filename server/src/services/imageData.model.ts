export interface ImageSize {
  sufix: string;
  width?: number;
  height?: number;
}

export interface ImageData {
  originSrc: string;
  targetSrc: string;
  sizes: [ImageSize, ImageSize, ImageSize];
}