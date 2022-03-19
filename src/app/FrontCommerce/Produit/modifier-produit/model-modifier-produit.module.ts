import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelModifierProduitRoutingModule } from './model-modifier-produit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifierProduitComponent } from './modifier-produit.component'
@NgModule({
  declarations: [ModifierProduitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModifierProduitRoutingModule
  ]
})
export class ModelModifierProduitModule { }
