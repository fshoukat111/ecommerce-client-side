import { getCategoryListSelector } from './store/selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadCategoryList } from './store/actions';
import { Subscription } from 'rxjs';
import { Categories } from '@apps/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

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
    this.route.navigate([`/${category.slug}`]);

  }
}
