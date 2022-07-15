import { createReducer, on, Action } from '@ngrx/store';
import * as productAction from '@apps/modules/products/store/actions';
import { IProductState, initialProductState } from './state';

const createProductSectionReducer = createReducer(initialProductState,

  //get Category List By Admin Reducers
  on(productAction.LoadProductList, (state,{categorySlug,page}) => ({
    ...state,
    categorySlug,
    page
  })),

  on(productAction.LoadProductListSuccess, (state, { productList }) => ({
    ...state,
    productList
  })),

  on(productAction.LoadProductListFail, (state, { error }) => ({
    ...state,
    error,
  }))
  
)
export function productSectionReducer(state: IProductState  = initialProductState, action: Action) {
    return createProductSectionReducer(state, action);
  }