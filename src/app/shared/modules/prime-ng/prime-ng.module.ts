import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import {PaginatorModule} from 'primeng/paginator';
import {OrderListModule} from 'primeng/orderlist';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {AccordionModule} from 'primeng/accordion';


const modules = [
  CommonModule,
  BrowserAnimationsModule,
  TabViewModule,
  CardModule,
  BreadcrumbModule,
  CarouselModule,
  ProgressSpinnerModule,
  ToastModule,
  TooltipModule,
  PaginatorModule,
  OrderListModule,
  DynamicDialogModule,
  AccordionModule,
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class PrimeNgModule { }
