import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() products:  Product []
  @Input() fixedCols: any
  @Input() checked = false;
  @Input() itemForPage:[{}];
  selectedValue: string;
  indeterminate = false;
  align = 'start';
  disabled = false;

  username: string;


  toUpperCase () {
    this.username = this.username.toUpperCase();
  }
  toLowerCase () {
    this.username = this.username.toLowerCase();
  }


  constructor() {
    this.selectedValue="10"
    this.itemForPage = [
      {value:10, viewValue:"10"},
      {value:25, viewValue:"25"},
      {value:50, viewValue:"50"},
      {value:100, viewValue:"100"},
      {value:250, viewValue:"250"},
      /*{value:500, viewValue:"500"},*/
      /*{value:1000, viewValue:"1000"}*/
      ]

  }

  ngOnInit() {
  }

}
