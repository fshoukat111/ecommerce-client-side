import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


import { LoadProductBySlug } from '../../store/product.actions';
import { getProductBySlugSelector } from '../../store/product.selectors';
import { MenuItem } from 'primeng/api';
import { Cart } from '@apps/shared/models/carts/cart.model';
import { LoadAddProductToCart } from '@apps/modules/cart/store/cart.actions';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  private categorySlug: string;
  private productSlug: string;
  public productDetail: any;
  public categoryName: any;
  public items: MenuItem[];
  private subscriptions$: Subscription[] = [];
  public cart = new Cart();


  constructor(private productStore: Store, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categorySlug = params.get('categorySlug');
      this.productSlug = params.get('productSlug');
      this.dispatchProductBySlugAction(this.categorySlug, this.productSlug)
    });

  }

  /**
   * dispactch product detail action
   * @param categorySlug 
   * @param productSlug 
   */
  private dispatchProductBySlugAction(categorySlug: string, productSlug: string): void {
    this.productStore.dispatch(LoadProductBySlug({ categorySlug: this.categorySlug, productSlug: this.productSlug }));
    this.getProductDetail();
  }

  /**
   * get product detail object
   */
  private getProductDetail(): void {
    this.subscriptions$.push(
      this.productStore.pipe(select(getProductBySlugSelector)).subscribe((productDetail: any) => {
        if (productDetail) {
          this.productDetail = productDetail;
          this.productDetail.category?.forEach((category) => {
            this.categoryName = category.name;
          });
          this.items = [
            { label: `${this.categoryName}` },
            { label: `${this.productDetail.name}` },
          ];
        }
      })
    );
  }

  /**
 * dispatch product action
 * @param cart 
 */
  public dispatchAddProductAction(cart: Cart): void {
    this.productStore.dispatch(LoadAddProductToCart({ productSlug: this.productSlug, cart: cart }));
    // this.router.navigate([`cart/${this.productSlug}`]);
  }
}
