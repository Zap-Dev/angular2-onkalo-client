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
  constructor() { }

  ngOnInit() {
  }

}
