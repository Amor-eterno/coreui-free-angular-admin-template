import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestPayload}  from 'src/app/interfaces/payment.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/v1';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data-endpoint`);
  }

  postPayment(payload: RequestPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/payments/promerica/`, payload);
  }
}
