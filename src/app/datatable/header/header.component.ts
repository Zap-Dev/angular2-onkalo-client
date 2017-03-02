import { Component,  Input, OnInit } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})

export class HeaderComponent implements OnInit {

  @Input() products:  Product []
  numbers:number[]

  constructor() {

  }

  ngOnInit() {
  }

}
