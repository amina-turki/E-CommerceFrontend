import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelAfficherProduitRoutingModule } from './model-afficher-produit-routing.module';
import { AfficherProduitComponent } from './afficher-produit.component';
import { filter_produit } from '../filter_produit';
import { FormsModule } from '@angular/forms';
//import { AjouterProduitComponent } from '../ajouter-produit/ajouter-produit.component';
import { AjouterCategorieComponent } from '../../Categorie/ajouter-categorie/ajouter-categorie.component';
import { AfficherCatParProduitComponent } from '../../Categorie/afficher-cat-par-produit/afficher-cat-par-produit.component'
//import { AfficherCatParProduitComponent } from '../../Categorie/afficher-cat-par-produit/afficher-cat-par-produit.component';
@NgModule({
  declarations: [AfficherCatParProduitComponent,AjouterCategorieComponent,AfficherProduitComponent,filter_produit],
  imports: [
    CommonModule,
    ModelAfficherProduitRoutingModule,FormsModule
  ]
})
export class ModelAfficherProduitModule { }
