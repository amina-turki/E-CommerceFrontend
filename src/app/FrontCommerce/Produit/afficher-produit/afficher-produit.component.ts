import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.scss']
})
export class AfficherProduitComponent implements OnInit {

  constructor(private http: HttpClient) { }
  cilents: any;
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.http.get('http://localhost:8080/Ecommerce/E-Commerce_Backend/public/api/clients').subscribe(
    data => {
   // this.cilents=data;
    console.log(data)
    });
  }
}
