import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'


@Component({
  selector: 'app-datatable',
  template: `
    <div>
        <app-header [products]="products" ></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() products:  Product []
  @Input() title:string



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
    // Called right after our bindings have been checked but only
    // if one of our bindings has changed.
    // changes is an object of the format:
    // {
    //   'prop': PropertyUpdate
    // }
    console.log("OnChanges")
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
