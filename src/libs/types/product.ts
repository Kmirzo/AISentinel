import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductStatus,
  ProductResolution,
  ProductConnectivity,
  ProductPowerSource,
  ProductStorage,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: number;
  productLeftCount: number;
  productStorage: ProductStorage;
  productResolution: ProductResolution;
  productConnectivity: ProductConnectivity;
  productPowerSource: ProductPowerSource;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  productConnectivity?: ProductConnectivity;
  productResolution?: ProductResolution;
  search?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: number;
  productLeftCount: number;
  productStorage?: ProductStorage;
  productResolution: ProductResolution;
  productConnectivity?: ProductConnectivity;
  productPowerSource: ProductPowerSource;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: String;
  productPrice?: number;
  productLeftCount?: number;
  productStorage?: ProductStorage;
  productResolution: ProductResolution;
  productConnectivity?: ProductConnectivity;
  productPowerSource: ProductPowerSource;
  productDesc?: string;
  productUsage: string;
  productEnvironment: string;
  productImages?: string[];
  productViews?: number;
}
