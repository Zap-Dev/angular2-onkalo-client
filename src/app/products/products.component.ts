import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  selectedProduct: Product;
  constructor(private productService: ProductService){}

  getProducts(): void{
    this.productService.getProducts().then( products => this.products = products)
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
