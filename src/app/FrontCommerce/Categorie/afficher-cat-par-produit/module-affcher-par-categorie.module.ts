import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAfficherParCategorieRoutingModule } from './module-afficher-par-categorie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfficherCatParProduitComponent  } from './afficher-cat-par-produit.component';
//import { AjouterCategorieComponent } from '../ajouter-categorie/ajouter-categorie.component';
//import { AjouterCategorieComponent }from '../../Categorie/ajouter-categorie/ajouter-categorie.component';
@NgModule({
  declarations: [AfficherCatParProduitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleAfficherParCategorieRoutingModule
  ]
})
export class ModuleAjoutCategorieModule { }
