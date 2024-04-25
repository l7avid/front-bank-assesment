import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DateDdMmYyyyPipe } from './pipes/date-dd-mm-yyyy.pipe';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search/search/search.component';
import { ProductResultSelectComponent } from './products/product-result-select/product-result-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DateDdMmYyyyPipe,
    ProductResultSelectComponent
  ],
  imports: [
    BrowserModule,
    SearchComponent,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
