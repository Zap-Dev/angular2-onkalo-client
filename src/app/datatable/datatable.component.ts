import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-datatable',
  template: `
    <div>
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() products:  Product [];

  constructor() { }

  ngOnInit() {

    console.log(this.products);
    console.log('Test');
  }

}