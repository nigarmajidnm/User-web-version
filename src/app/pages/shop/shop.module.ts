/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    NgxSkeletonLoaderModule
  ]
})
export class ShopModule { }
