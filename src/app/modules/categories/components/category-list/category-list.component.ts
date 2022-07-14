import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '@apps/shared/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryList:Categories[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
