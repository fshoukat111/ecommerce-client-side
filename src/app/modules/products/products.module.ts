import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsComponent } from '@apps/modules/products/products.component';
import { ProductsByCategoryComponent } from '@apps/modules/products/components';
import { PrimeNgModule } from '@apps/shared/modules';
import { ProductDetailComponent } from '@apps/modules/products/pages';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsByCategoryComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    NgxPaginationModule 
  ]
})
export class ProductsModule { }
