import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '@apps/shared/models';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.sass']
})
export class ProductsByCategoryComponent implements OnInit {

  @Input() productList:Products[]=[];
  @Input() config:any;
  @Output() pageChanged = new EventEmitter();
  @Output() routeToProductDetail = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  pageChange(page):void{
    this.pageChanged.emit(page);
  }

  routeToProductDetailPage(product){
    this.routeToProductDetail.emit(product);
  }

}
