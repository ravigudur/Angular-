import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard.component';




@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerDashboardModule
  ]
})
export class CustomerDashboardModule { }
