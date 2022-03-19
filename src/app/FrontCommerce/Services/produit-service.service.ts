import { HttpClient } from '@angular/common/http';
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


  /* getAll() {
     this.httpClient.get(this.apiURL).subscribe(
       data => {
 
     return data;
       });
 
     }*/
}
