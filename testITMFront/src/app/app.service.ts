import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost:1337';
  usersUrl = this.baseUrl + '/client';
  salesUrl = this.baseUrl + '/sale';
  vehiclesUrl = this.baseUrl + '/vehicle';
constructor(private http: HttpClient) { }


getUsers() {
  return this.http.get(this.usersUrl);
}
getVehicles() {
  return this.http.get(this.salesUrl);
}
getSales() {
  return this.http.get(this.vehiclesUrl);
}
}
