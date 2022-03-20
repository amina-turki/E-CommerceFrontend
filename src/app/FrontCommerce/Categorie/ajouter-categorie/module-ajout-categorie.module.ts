import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAjoutCategorieRoutingModule } from './module-ajout-categorie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterCategorieComponent } from './ajouter-categorie.component';


@NgModule({
  declarations: [AjouterCategorieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleAjoutCategorieRoutingModule
  ]
})
export class ModuleAjoutCategorieModule { }
