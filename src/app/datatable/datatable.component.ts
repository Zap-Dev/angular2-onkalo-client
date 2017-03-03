import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'
import {isUndefined} from "util";
import {isEmpty} from "rxjs/operator/isEmpty";
import {KeysPipe} from "./pipes/keys.pipe";


@Component({
  moduleId: module.id,
  selector: 'app-datatable',
  template: `
    <md-card>
          <app-header [products]="products | slice:0:1" [fixedCols]="fixedCols" ></app-header>
          <app-body [products]="products" [fixedCols]="fixedCols"></app-body>
          <app-footer></app-footer>
    </md-card>
  `,
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() products:  Product []
  @Input() title:string
  product: Product

  fixedCols: number = 1;
  constructor(
) {
    //console.log(this.title)
  }

  ngOnInit() {
    console.log("OnInit")
    /*console.log(this.listproducts)*/
    //this.listproducts.forEach(function(e){console.log(e)});

  }

  ngOnDestroy() {
    // Speak now or forever hold your peace
    console.log("OnDestroy")
    console.log(this.products)

  }
  ngDoCheck() {
    // Custom change detection
    console.log("DoCheck")
    console.log(this.products)

  }
  ngOnChanges(changes) {
    // Called right after our bindings have been checked but only if one of our bindings has changed.changes is an object of the format:
    // {'prop': PropertyUpdate}


    console.log("OnChanges")
    console.log(this.products instanceof Array)
    console.log( isUndefined(this.products))
    //Controllo se il prodotto passato dal componente parent è definito ed è >0
    if (!isUndefined(this.products) && this.products.length >0 ){
      this.fixedCols += Object.keys(this.products[0]).length
    }

    //this.product = ( !isUndefined(this.products)  ? this.products.slice(0,1)[0] : new Product)
    console.log(this.products)
  }
  ngAfterContentInit() {
    // Component content has been initialized
    console.log("AfterConntentInit")
    console.log(this.products)
  }
  ngAfterContentChecked() {
    // Component content has been Checked
    console.log("AfterContentChecked")
    console.log(this.products)
  }
  ngAfterViewInit() {
    // Component views are initialized
    console.log("AfterViewInit")
    console.log(this.products)
  }
  ngAfterViewChecked() {
    // Component views have been checked
    console.log("AfterViewChecked")
    console.log(this.products)
  }

}
