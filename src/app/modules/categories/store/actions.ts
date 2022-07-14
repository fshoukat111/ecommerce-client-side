import { createAction, props } from '@ngrx/store';
import { Categories } from '@apps/shared/models';

// Load  Category list Action
export const LoadCategoryList = createAction(
    '[LoadCategoryList] LoadCategoryList'
  
  );
  
  // Load  Category list Action Successful
  export const LoadCategoryListSuccess = createAction(
    '[LoadCategoryListSuccess] LoadCategoryListSuccess',
    props<{ categoryList: Categories[] }>()
  );
  
  // Load Create Category Action Failure
  export const LoadCategoryListFail = createAction(
    '[LoadCategoryListFail] LoadCategoryListFail',
    props<{ error: any }>()
  );