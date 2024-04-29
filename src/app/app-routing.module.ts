import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ModalDeleteComponent } from './shared/components/modal-delete/modal-delete.component';

const routes: Routes = [
  { path: 'form', component: AddProductFormComponent },
  { path: 'edit/:id', component: AddProductFormComponent },
  { path: 'delete/:id', component: ModalDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }