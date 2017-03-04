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


  constructor() { }

  ngOnInit() {
  }

}
