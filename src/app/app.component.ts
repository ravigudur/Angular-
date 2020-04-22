import { Component, ChangeDetectionStrategy,ChangeDetectorRef, } from '@angular/core';
import { from } from 'rxjs';
import { CustomerDashboardComponent } from 'src/customer-dashboard/customer-dashboard.component';
import { ApiValuesService } from './api-values.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerDashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  

})
export class AppComponent {
  title = 'A6Demo';
 
  a : Array<number> =[1,2,3];
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef, public dataProvider:CustomerDashboardComponent ) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      this.ref.markForCheck();
    }, 1000 );

     ref.detach();
     setInterval(() => { this.ref.detectChanges(); }, 90000);

     ref.reattach();
  } 

}
