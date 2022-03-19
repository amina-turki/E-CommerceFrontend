import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produit } from '../Produit/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/articles";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.apiURL)

  }
  create(article): Observable<Produit> {
    return this.httpClient.post<Produit>(this.apiURL, (article))
  }

  update(id, article): Observable<Produit> {
    return this.httpClient.put<Produit>(this.apiURL + id, article)
  }

  Delete(id) {
    return this.httpClient.delete(this.apiURL + '/' + id)
  }


  /* getAll() {
     this.httpClient.get(this.apiURL).subscribe(
       data => {
 
     return data;
       });
 
     }*/
}
