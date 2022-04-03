import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Categorie  } from '../Categorie/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
 private apiURL = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/categories";
  private apiURLAjout = "http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/Creercategories";

  constructor(private httpClient: HttpClient) { }

  create(categorie,id): Observable<Categorie> {
    return this.httpClient.post<Categorie>(this.apiURLAjout+'/'+id, categorie)
  }

  getAllc(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>('http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/getArticleCat')
  }
 
  afficheCatparProd(id): Observable<Categorie> {
    return this.httpClient.get<Categorie>('http://localhost:81/BackendEcommerce/E-Commerce_Backend/public/api/getArticleCatUnProd'+'/'+id)
  }

  update(id, categorie): Observable<Categorie> {
    return this.httpClient.put<Categorie>(this.apiURL+'/'+id, categorie)
  }

  Delete(id) {
    return this.httpClient.delete(this.apiURL + '/' + id)
  }

  find(id): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(this.apiURL+'/'+id)
  }

}
