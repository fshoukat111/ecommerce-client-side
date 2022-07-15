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