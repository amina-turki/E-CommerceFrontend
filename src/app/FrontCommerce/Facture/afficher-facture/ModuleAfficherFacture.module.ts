import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAfficherFactureRoutingModule } from './moduleAfficherFacture-routing.module';
import { filter_produit } from '../filter_produit';

import { FormsModule } from '@angular/forms';
import { AfficherFactureComponent } from './afficher-facture.component';
//import { AjouterCategorieComponent } from '../../Categorie/ajouter-categorie/ajouter-categorie.component'
import { AjouterFactureComponent } from '../ajouter-facture/ajouter-facture.component'
@NgModule({
  declarations: [AjouterFactureComponent,filter_produit,AfficherFactureComponent],
  imports: [
    CommonModule,
    ModuleAfficherFactureRoutingModule,FormsModule
  ]
})
export class ModuleAfficherFactureModule { }
