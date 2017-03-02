import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DatatableComponent } from './datatable.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatatableComponent, HeaderComponent, BodyComponent, FooterComponent],
   exports: [
    DatatableComponent,
   ]
})
export class DatatableModule { }
