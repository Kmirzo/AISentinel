import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductStatus,
  ProductResolution,
  ProductConnectivity,
  ProductPowerSource,
  ProductStorage,
  ProductExtraFeatures,
  ProductUsage,
  ProductEnvironment,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: number;
  productLeftCount: number;
  productStorage: ProductStorage;
  productEnvironment: ProductEnvironment;
  productResolution: ProductResolution;
  productConnectivity: ProductConnectivity;
  productPowerSource: ProductPowerSource;
  productExtraFeatures: ProductExtraFeatures;
  productUsage: ProductUsage;
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
  search?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: number;
  productLeftCount: number;
  productStorage?: ProductStorage;
  productEnvironment?: ProductEnvironment;
  productResolution?: ProductResolution;
  productConnectivity?: ProductConnectivity;
  productPowerSource?: ProductPowerSource;
  productExtraFeatures?: ProductExtraFeatures;
  productUsage?: ProductUsage;
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
  productEnvironment?: ProductEnvironment;
  productUsage?: ProductUsage;
  productResolution?: ProductResolution;
  productConnectivity?: ProductConnectivity;
  productPowerSource?: ProductPowerSource;
  productExtraFeatures?: ProductExtraFeatures;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
