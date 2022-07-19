import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Products } from '@apps/shared/models';
import { LoadProductList } from './store/actions';
import { getProductListSelector } from './store/selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private categorySlug: string;
  private subscriptions$: Subscription[] = [];
  public productList: Products[] = [];
  public page: number = 1;

  constructor(private productStore: Store, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categorySlug = params.get('categorySlug');
      this.dispatchProductAction(this.categorySlug, this.page);

    });
  }

  /**
   * dispatch product action
   * @param categorySlug 
   * @param page 
   */
  private dispatchProductAction(categorySlug: string, page: number): void {
    this.productStore.dispatch(LoadProductList({ categorySlug: this.categorySlug, page: this.page }));
    this.getProductListByCategory();
  }

  /**
   * get product list by category
   */
  private getProductListByCategory(): void {
    this.subscriptions$.push(
      this.productStore.pipe(select(getProductListSelector)).subscribe((productList: Products[]) => {
        if (productList && productList.length) {
          this.productList = productList;
        }
        else {
          this.productList = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((data) => {
      data.unsubscribe();
    })
  }
}