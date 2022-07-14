import { createReducer, on, Action } from '@ngrx/store';
import * as categoryAction from '@apps/modules/categories/store/actions';
import { ICategoryState, initialCategoryState } from './state';

const creatAdminSectionReducer = createReducer(initialCategoryState,

  //get Category List By Admin Reducers
  on(categoryAction.LoadCategoryList, (state) => ({
    ...state,
  })),

  on(categoryAction.LoadCategoryListSuccess, (state, { categoryList }) => ({
    ...state,
    categoryList
  })),

  on(categoryAction.LoadCategoryListFail, (state, { error }) => ({
    ...state,
    error,
  }))
  
)
export function adminSectionReducer(state: ICategoryState  = initialCategoryState, action: Action) {
    return creatAdminSectionReducer(state, action);
  }