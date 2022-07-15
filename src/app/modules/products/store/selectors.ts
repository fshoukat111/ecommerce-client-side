import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "./state";

export const productSelector = createFeatureSelector<IProductState>('product');
export const getProductListSelector = createSelector(productSelector, (state) => state.productList);
