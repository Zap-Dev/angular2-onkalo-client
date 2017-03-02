import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-datatable',
  template: `
    <div>
    <li *ngFor="let product of products">
        {{ product.title }}
      </li>
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() products:  Product [];

  

  constructor(

  ) { }

  ngOnInit() {
    let product = this.products

    console.log('object evt: %O', this.products);
    console.log(this.products);
    console.log('Test');
  }

}