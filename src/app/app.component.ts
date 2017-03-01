import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent{
  title = 'app works!';

  

  // products = getPr
  constructor() { }


}
