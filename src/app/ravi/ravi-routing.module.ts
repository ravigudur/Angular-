import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaviComponent } from './ravi.component';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [{ path: '', component: RaviComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})

export class RaviRoutingModule { }
