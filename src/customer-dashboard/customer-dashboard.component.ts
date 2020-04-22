import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})


export class CustomerDashboardComponent implements OnInit {

  a : Array<number> =[];
  get data() { 
    
  // let  a :any = [1,2,3];
  // let b: any
 
     setInterval(    
      () => {
        this.a = this.a.concat(Math.random())
        console.log(this.a)}, 10000 );
    
   return this.a;
  }
  ngOnInit(): void {
  }

}
