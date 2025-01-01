import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductStatus,
  ProductResolution,
  ProductConnectivity,
  ProductPowerSource,
  ProductExtraFeatures,
  ProductStorage,
  ProductUsage,
  ProductEnvironment,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productResolution: {
      type: String,
      enum: ProductResolution,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },

    productConnectivity: {
      type: String,
      enum: ProductConnectivity,
    },

    productPowerSource: {
      type: String,
      enum: ProductPowerSource,
    },

    productExtraFeatures: {
      type: String,
      enum: ProductExtraFeatures,
    },

    productUsage: {
      type: String,
      enum: ProductUsage,
    },

    productEnvironment: {
      type: String,
      enum: ProductEnvironment,
    },

    productStorage: {
      type: String,
      enum: ProductStorage,
    },
  },
  { timestamps: true } //UpdatedAt , CreatedAt
);

productSchema.index(
  { productConnectivity: 1, productName: 1, productResolution: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
