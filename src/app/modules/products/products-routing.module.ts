import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from '@apps/modules/products/pages';

const routes: Routes = [
  {
    path: 'products/:categorySlug',
    component:ProductsComponent
  },
  {
    path: 'product/:categorySlug/:productSlug',
    component:ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
