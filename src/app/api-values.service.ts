import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IapiValues } from './api-values';

@Injectable({
  providedIn: 'root'
})
export class ApiValuesService {

private _api: string ="http://dummy.restapiexample.com/api/v1/employees";

  constructor(private _http: HttpClient) { }

getValues():Observable<IapiValues>{
 return this._http.get<IapiValues>(this._api);

}



}
