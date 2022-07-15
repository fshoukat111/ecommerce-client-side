import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as categoryAction from '@apps/shared/store/actions';
import { CategoriesService } from '@apps/core/services/categories/categories.service';
import { Categories } from '@apps/shared/models';


@Injectable()
export class CategorySectionEffects {
    constructor(private actions$: Actions,private categoryService: CategoriesService) { }

    /**
     *Get Category list
     * Triggers when LoadCreateCategory action is dispatched
     * On success, dispatches LoadCreateCategorySuccess action
    */
    getCategoryList$ = createEffect(() =>
        this.actions$.pipe(ofType(categoryAction.LoadCategoryList),
            switchMap((action) => {
                return this.categoryService.getCategoriesList().pipe(map((categoryList: Categories[]) => {
                    return categoryAction.LoadCategoryListSuccess({ categoryList });
                }),
                    catchError((error) => {
                        // this.messageService.add({
                        //   severity: 'error',
                        //   summary: 'Login Error',
                        //   detail: 'Invalid email or password',
                        // });
                        return of(categoryAction.LoadCategoryListFail({ error }));
                    })
                );
            })
        )
    )

}