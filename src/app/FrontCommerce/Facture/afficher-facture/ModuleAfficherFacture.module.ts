import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAfficherFactureRoutingModule } from './ModuleAfficherFacture-routing.module';
import { AfficherFactureComponent } from './afficher-facture.component';



@NgModule({
  declarations: [AfficherFactureComponent],
  imports: [
    CommonModule,
    ModuleAfficherFactureRoutingModule
  ]
})
export class ModuleAfficherFactureModule { }
