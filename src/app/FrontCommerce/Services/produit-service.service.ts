import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produit } from '../Produit/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private apiURL = "http://localhost:81/Ecommerce/public/api/articles/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
