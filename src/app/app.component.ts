import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categories } from './shared/models';
import { LoadCategoryList, getCategoryListSelector } from '@apps/shared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'client-side';

  subscriptions$: Subscription[] = [];
  public categoryList: Categories[];

  constructor(private categoryStore: Store, private route: Router) { }

  ngOnInit(): void {
    this.dispatchCategoryListAction();
  }

  public dispatchCategoryListAction() {
    this.categoryStore.dispatch(LoadCategoryList());
    this.getCategoryList();
  }

  /**
 * Get Category List form category Store
 */
  private getCategoryList(): void {
    this.subscriptions$.push(
      this.categoryStore.pipe(select(getCategoryListSelector)).subscribe((categories: Categories[]) => {
        if (categories && categories.length) {
          this.categoryList = categories;
        }
      })
    );
  }

  /**
   * recieve category from child components for navigation
   * @param category
   */
  public redirectToProduct(category: Categories): void {
    this.route.navigate([`products/${category.slug}`]);
  }
}
