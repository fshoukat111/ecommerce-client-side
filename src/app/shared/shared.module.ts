import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@apps/shared/modules';
import { CategoriesModule,ProductsModule } from '@apps/modules';


const modules = [
  CommonModule,
  PrimeNgModule,
  CategoriesModule,
  ProductsModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class SharedModule { }
