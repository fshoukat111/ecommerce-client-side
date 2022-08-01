import { Cart } from '@apps/shared/models/carts/cart.model';
import { createAction, props } from '@ngrx/store';

// Load  Category list Action
export const LoadProductList = createAction(
  '[LoadProductList] LoadProductList',
  props<{ categorySlug: string,page:number }>()


);

// Load  Category list Action Successful
export const LoadProductListSuccess = createAction(
  '[LoadProductListSuccess] LoadProductListSuccess',
  props<{ productList: any[] }>()
);

// Load Create Category Action Failure
export const LoadProductListFail = createAction(
  '[LoadProductListFail] LoadProductListFail',
  props<{ error: any }>()
);

// Load  Category list Action
export const LoadProductBySlug = createAction(
  '[LoadProductBySlug] LoadProductBySlug',
  props<{ categorySlug: string,productSlug:string }>()
);

// Load  Category list Action Successful
export const LoadProductBySlugSuccess = createAction(
  '[LoadProductBySlugSuccess] LoadProductBySlugSuccess',
  props<{ productDetail: any }>()
);

// Load Create Category Action Failure
export const LoadProductBySlugFail = createAction(
  '[LoadProductBySlugFail] LoadProductBySlugFail',
  props<{ error: any }>()
);