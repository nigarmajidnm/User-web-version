/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwaitPaymentsProductComponent } from './await-payments-product.component';

const routes: Routes = [
  {
    path: '',
    component: AwaitPaymentsProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwaitPaymentsProductRoutingModule { }
