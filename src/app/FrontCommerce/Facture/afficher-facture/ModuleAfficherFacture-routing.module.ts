import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherProduitComponent } from '../../Produit/afficher-produit/afficher-produit.component';


const routes: Routes = [
  {
    path: '',
    component: AfficherProduitComponent,
    data: {
      breadcrumb: 'Factures',
      icon: 'icofont-table bg-c-blue',
      //breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAfficherFactureRoutingModule { }
