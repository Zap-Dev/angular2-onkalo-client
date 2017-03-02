import { Component,  Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { OrdinalPipe } from "../pipes/ordinal.pipe";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})

export class HeaderComponent implements OnInit {

  @Input() products:  Product []
  numbers:number[]

  constructor() {
    this.numbers = [
      1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20
    ];
  }

  ngOnInit() {
  }

}
