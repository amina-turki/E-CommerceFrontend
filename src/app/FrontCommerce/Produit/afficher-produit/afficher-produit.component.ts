import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../Services/produit-service.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.scss']
})
export class AfficherProduitComponent implements OnInit {

  produits: Produit[] = [];

  constructor(public produitService: ProduitServiceService) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe((data: Produit[]) => {
      this.produits = data;
      console.log(this.produits);
    })
  }



}
