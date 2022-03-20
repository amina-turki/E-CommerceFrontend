import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Categorie  } from '../Categorie/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
 // private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/categories";
  private apiURLAjout = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/Creercategories";

  constructor(private httpClient: HttpClient) { }

  create(categorie,id): Observable<Categorie> {
    return this.httpClient.post<Categorie>(this.apiURLAjout+'/'+id, categorie)
  }
 
}
