import { Injectable } from '@angular/core';


import { Product } from './product';
import { PRODUCTS } from './mock-prodocuts';


@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

}
