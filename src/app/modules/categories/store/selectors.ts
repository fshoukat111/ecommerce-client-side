import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICategoryState } from "./state";

export const categorySelector = createFeatureSelector<ICategoryState>('category');
export const getCategoryListSelector = createSelector(categorySelector, (state) => state.categoryList);
