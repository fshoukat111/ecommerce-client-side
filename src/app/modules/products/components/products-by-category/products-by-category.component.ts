import { Component, Input, OnInit } from '@angular/core';
import { Products } from '@apps/shared/models';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.sass']
})
export class ProductsByCategoryComponent implements OnInit {

  @Input() productList:Products[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
