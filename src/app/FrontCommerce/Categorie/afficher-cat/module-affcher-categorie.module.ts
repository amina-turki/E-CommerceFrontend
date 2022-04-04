import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAfficherCategorieRoutingModule } from './module-afficher-categorie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfficherCatComponent } from './afficher-cat.component';


@NgModule({
  declarations: [AfficherCatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleAfficherCategorieRoutingModule
  ]
})
export class ModuleAjoutCategorieModule { }
