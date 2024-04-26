import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: 'form', component: AddProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }