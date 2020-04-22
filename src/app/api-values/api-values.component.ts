import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { from } from 'rxjs';
import { ApiValuesService } from '../api-values.service';
@Component({
  selector: 'app-api-values',
  templateUrl: './api-values.component.html',
  styleUrls: ['./api-values.component.css']
})
export class ApiValuesComponent implements OnInit {

  public values = [];
  public error;
  
  constructor(private _apivaluesService: ApiValuesService) { 
    this._apivaluesService.getValues()
    .subscribe(val => this.values = val.data, error=>{ this.error= error;
     console.log('err ',this.error);
   } );
  }

  ngOnInit(): void {
  }

}
