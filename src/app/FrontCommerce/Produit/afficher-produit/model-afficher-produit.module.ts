import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelAfficherProduitRoutingModule } from './model-afficher-produit-routing.module';
import { AfficherProduitComponent } from './afficher-produit.component';


@NgModule({
  declarations: [AfficherProduitComponent],
  imports: [
    CommonModule,
    ModelAfficherProduitRoutingModule,
  ]
})
export class ModelAfficherProduitModule { }
