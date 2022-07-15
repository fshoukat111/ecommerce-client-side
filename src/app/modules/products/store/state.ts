import { Categories,Products } from "@apps/shared/models";

/** State for Tab store. */
export interface IProductState {
    productList: Products[],
    category: Categories,
    categorySlug:string,
    page:number,
}

/** Initial state for Tab store. */
export const initialProductState: IProductState = {
    productList:[],
    category:{},
    categorySlug:'',
    page:1
};