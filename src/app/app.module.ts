import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { HeaderComponent} from "./shared/header/header.component";
import { SharedModule} from "./shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService} from "./product.service";
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { DatatableModule } from './datatable/datatable.module';
import { KeysPipe } from './datatable/pipes/keys.pipe';
import { ValuesPipe } from './datatable/pipes/values.pipe';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    DatatableModule,

    //SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
