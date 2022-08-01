import { Categories,Products } from "@apps/shared/models";
import { Cart } from "@apps/shared/models/carts/cart.model";

/** State for Tab store. */
export interface IProductState {
    productList: Products[],
    productDetail: Products,
    category: Categories,
    cart: Cart,
    categorySlug:string,
    page:number,
}

/** Initial state for Tab store. */
export const initialProductState: IProductState = {
    productList:[],
    productDetail:{},
    category:{},
    cart:{},
    categorySlug:'',
    page:1
};