import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from '@apps/modules/categories/categories.component';
import { CategoryListComponent } from '@apps/modules/categories/components';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
