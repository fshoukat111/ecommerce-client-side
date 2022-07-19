import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '@apps/modules/products/products.component';
import { ProductsByCategoryComponent } from '@apps/modules/products/components';
import { PrimeNgModule } from '@apps/shared/modules';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsByCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
