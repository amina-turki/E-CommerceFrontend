import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAfficherFactureRoutingModule } from './ModuleAfficherFacture-routing.module';
import { filter_produit } from '../filter_produit';



@NgModule({
  declarations: [filter_produit],
  imports: [
    CommonModule,
    ModuleAfficherFactureRoutingModule
  ]
})
export class ModuleAfficherFactureModule { }
