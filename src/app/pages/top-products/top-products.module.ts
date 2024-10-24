/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopProductsRoutingModule } from './top-products-routing.module';
import { TopProductsComponent } from './top-products.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    TopProductsComponent
  ],
  imports: [
    CommonModule,
    TopProductsRoutingModule,
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
    NgxSkeletonLoaderModule
  ]
})
export class TopProductsModule { }
