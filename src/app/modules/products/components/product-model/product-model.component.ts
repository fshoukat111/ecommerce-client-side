import { Products } from '@apps/shared/models';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.sass']
})
export class ProductModelComponent implements OnInit {
  product: Products

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit(): void {
    if (this.config.data) {
      this.product = this.config.data.product;
    };
  }

}
