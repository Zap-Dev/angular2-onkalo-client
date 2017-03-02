import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductsComponent }  from '../products/products.component'
import { ProductDetailComponent }     from '../product-detail/product-detail.component' 

const routers: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products',   component: ProductsComponent}
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
