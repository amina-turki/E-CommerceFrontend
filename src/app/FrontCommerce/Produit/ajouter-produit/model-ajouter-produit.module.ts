import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelAjouterProduitRoutingModule } from './model-ajouter-produit-routing.module';
import { AjouterProduitComponent } from './ajouter-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//mport { AfficherProduitComponent } from '../afficher-produit/afficher-produit.component';

@NgModule({
  declarations: [AjouterProduitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModelAjouterProduitRoutingModule
  ]
})
export class ModelAjouterProduitModule { }
