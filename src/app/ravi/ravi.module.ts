import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaviComponent } from './ravi.component';
import { RaviRoutingModule } from './ravi-routing.module';




@NgModule({
  declarations: [RaviComponent],
  imports: [
    CommonModule,
    RaviRoutingModule
  ]
})
export class RaviModule { }
