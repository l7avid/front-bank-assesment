import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search/search/search.component';
import { ProductResultSelectComponent } from './products/product-result-select/product-result-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddButtonComponent } from './shared/components/add-button/add-button.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ModalDeleteComponent } from './shared/components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductResultSelectComponent,
    AddButtonComponent,
    AddProductFormComponent,
    SearchComponent,
    DropdownComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
