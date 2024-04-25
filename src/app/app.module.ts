import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DateDdMmYyyyPipe } from './pipes/date-dd-mm-yyyy.pipe';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search/search/search.component';
import { ProductResultSelectComponent } from './products/product-result-select/product-result-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddButtonComponent } from './shared/components/add-button/add-button.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DateDdMmYyyyPipe,
    ProductResultSelectComponent,
    AddButtonComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    SearchComponent,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
