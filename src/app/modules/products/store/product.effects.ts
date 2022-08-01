import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as productAction from '@apps/modules/products/store/product.actions';
import { Categories } from '@apps/shared/models';
import { ProductsService } from '@apps/core/services/products/products.service';


@Injectable()
export class ProductSectionEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) { }

    /**
     *Get Category list
     * Triggers when LoadCreateCategory action is dispatched
     * On success, dispatches LoadCreateCategorySuccess action
    */
    getProductList$ = createEffect(() =>
        this.actions$.pipe(ofType(productAction.LoadProductList),
            switchMap((action) => {
                return this.productService.getProductsList(action.categorySlug,action.page).pipe(map((productList: any[]) => {
                    return productAction.LoadProductListSuccess({ productList });
                }),
                    catchError((error) => {
                        // this.messageService.add({
                        //   severity: 'error',
                        //   summary: 'Login Error',
                        //   detail: 'Invalid email or password',
                        // });
                        return of(productAction.LoadProductListFail({ error }));
                    })
                );
            })
        )
    )

    /**
     *Get Category list
     * Triggers when LoadCreateCategory action is dispatched
     * On success, dispatches LoadCreateCategorySuccess action
    */
    getProductBySlug$ = createEffect(() =>
        this.actions$.pipe(ofType(productAction.LoadProductBySlug),
            switchMap((action) => {
                return this.productService.getProductBySlug(action.categorySlug,action.productSlug).pipe(map((productDetail: any) => {
                    return productAction.LoadProductBySlugSuccess({ productDetail });
                }),
                    catchError((error) => {
                        // this.messageService.add({
                        //   severity: 'error',
                        //   summary: 'Login Error',
                        //   detail: 'Invalid email or password',
                        // });
                        return of(productAction.LoadProductBySlugFail({ error }));
                    })
                );
            })
        )
    )
}