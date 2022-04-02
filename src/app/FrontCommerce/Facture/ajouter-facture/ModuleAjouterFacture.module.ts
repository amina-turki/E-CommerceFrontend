import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleModifierFactureRoutingModule } from './ModuleAjouterFacture-routing.module';
import { AjouterFactureComponent  } from './ajouter-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AjouterFactureComponent],
  imports: [
    CommonModule,
    ModuleModifierFactureRoutingModule,FormsModule, ReactiveFormsModule
    
  ]
})
export class ModuleAjouterFactureModule { }
