import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@apps/shared/modules';


const modules = [
  CommonModule,
  PrimeNgModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class SharedModule { }
