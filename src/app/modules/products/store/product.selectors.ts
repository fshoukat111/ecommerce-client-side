import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "./product.state";

export const productSelector = createFeatureSelector<IProductState>('product');
export const getProductListSelector = createSelector(productSelector, (state) => state.productList);
export const getProductBySlugSelector = createSelector(productSelector, (state) => state.productDetail);
