import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAjoutCategorieRoutingModule } from './module-ajout-categorie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterCategorieComponent } from './ajouter-categorie.component';
//import { AfficherCatParProduitComponent  } from '../afficher-cat-par-produit/afficher-cat-par-produit.component';


@NgModule({
  declarations: [AjouterCategorieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleAjoutCategorieRoutingModule
  ]
})
export class ModuleAfficherCategorieModule { }
