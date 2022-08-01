import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Products } from '@apps/shared/models';
import { LoadProductList } from './store/product.actions';
import { getProductListSelector } from './store/product.selectors';

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
  public config: any;

  constructor(private productStore: Store, private activatedRoute: ActivatedRoute,private router:Router) { }

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
      this.productStore.pipe(select(getProductListSelector)).subscribe((productList: any) => {
        if (productList.results && productList.results.length) {
          this.productList = productList.results;
          this.config = {
            itemsPerPage: 2,
            currentPage: this.page,
            totalItems: productList.count,
          }
        }
        else {
          this.productList = [];
        }
      })
    );
  }

  /**
   * page changed recive param from child
   * @param page
   */
  pageChanged(page): void {
    this.config.currentPage = page;
    this.page = this.config.currentPage;
    this.dispatchProductAction(this.categorySlug, this.page);
  }

  routeToProductDetail(product){
    this.router.navigate([`product/${this.categorySlug}/${product.slug}`])
  }
  ngOnDestroy(): void {
    this.subscriptions$.forEach((data) => {
      data.unsubscribe();
    })
  }
}