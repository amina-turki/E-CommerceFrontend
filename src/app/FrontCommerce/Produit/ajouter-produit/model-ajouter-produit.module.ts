import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelAjouterProduitRoutingModule } from './model-ajouter-produit-routing.module';
import { AjouterProduitComponent } from './ajouter-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
