import { Categories } from "@apps/shared/models";

/** State for Tab store. */
export interface ICategoryState {
    categoryList: Categories[],
    category: Categories,
}

/** Initial state for Tab store. */
export const initialCategoryState: ICategoryState = {
    categoryList:[],
    category:{},
};