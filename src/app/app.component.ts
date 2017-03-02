import {Component, Output, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import {OrdinalPipe} from "./datatable/pipes/ordinal.pipe";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent implements OnInit{
  title = 'app works!'

  products: Product[]
  numbers:number[]

  constructor(private productService: ProductService) {

  }

  getProducts():void{
    this.productService.getProducts().then( products => this.products = products )

  }

  ngOnInit(): void{
    this.getProducts();
    //console.log(this.title)
    //.log(this.products.length)
  }

}
