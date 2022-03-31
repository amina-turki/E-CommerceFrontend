import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Facture } from '../Facture/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {
  private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/factures";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facture[]> {
    return this.httpClient.get<Facture[]>(this.apiURL)

  }

  create(article): Observable<Facture> {
    return this.httpClient.post<Facture>(this.apiURL, article)
  }
  update(id, article): Observable<Facture> {
    return this.httpClient.put<Facture>(this.apiURL+'/'+id, article)
  }

  Delete(id) {
    return this.httpClient.delete(this.apiURL + '/' + id)
  }


  find(id): Observable<Facture[]> {
    return this.httpClient.get<Facture[]>(this.apiURL+'/'+id)
  }
}
