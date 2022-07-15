import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from '@apps/shared/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryList:Categories[]=[];
  @Output() redirectToProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emit category to parent for navigation
   * @param category 
   */
  public rediractTo(category:Categories):void{
    this.redirectToProduct.emit(category);
  }
}
