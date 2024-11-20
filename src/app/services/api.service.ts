import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data-endpoint`);
  }

  postPayment(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data-endpoint`, payload);
  }
}
