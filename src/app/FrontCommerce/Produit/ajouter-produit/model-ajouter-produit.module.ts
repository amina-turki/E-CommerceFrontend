import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelAjouterProduitRoutingModule } from './model-ajouter-produit-routing.module';
import { AjouterProduitComponent } from './ajouter-produit.component';


@NgModule({
  declarations: [AjouterProduitComponent],
  imports: [
    CommonModule,
    ModelAjouterProduitRoutingModule
  ]
})
export class ModelAjouterProduitModule { }
