import { NgModule } from '@angular/core';
import { PrimeNgModule } from '@apps/shared/modules';
import { ProductsModule } from '@apps/modules';


const modules = [
  PrimeNgModule,
  ProductsModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class SharedModule { }
