import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterEmployeComponent } from './FrontCommerce/Employe/ajouter-employe/ajouter-employe.component';
import { ModifierEmployeComponent } from './FrontCommerce/Employe/modifier-employe/modifier-employe.component';
import { AfficherEmployeComponent } from './FrontCommerce/Employe/afficher-employe/afficher-employe.component';
import { ModifierVenteComponent } from './FrontCommerce/Vente/modifier-vente/modifier-vente.component';
import { AjouterVenteComponent } from './FrontCommerce/Vente/ajouter-vente/ajouter-vente.component';
import { AfficherVenteComponent } from './FrontCommerce/Vente/afficher-vente/afficher-vente.component';
//import { AfficherProduitComponent } from './FrontCommerce/Produit/afficher-produit/afficher-produit.component';
//import { AjouterProduitComponent } from './FrontCommerce/Produit/ajouter-produit/ajouter-produit.component';
//import { ModifierProduitComponent } from './FrontCommerce/Produit/modifier-produit/modifier-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { AjouterFactureComponent } from './FrontCommerce/Facture/ajouter-facture/ajouter-facture.component';
import { AfficherFactureComponent } from './FrontCommerce/Facture/afficher-facture/afficher-facture.component';
import { ModifierFactureComponent } from './FrontCommerce/Facture/modifier-facture/modifier-facture.component';
//import { AjouterCategorieComponent } from './FrontCommerce/Categorie/ajouter-categorie/ajouter-categorie.component';
//ng g m FrontCommerce/Produit/AjouterProduit/ModelAjouterProduit --routing
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    AjouterEmployeComponent,
    ModifierEmployeComponent,
    AfficherEmployeComponent,
    ModifierVenteComponent,
    AjouterVenteComponent,
    AfficherVenteComponent,
    AjouterFactureComponent,
    AfficherFactureComponent,
    ModifierFactureComponent,
   // AjouterCategorieComponent,

    //AjouterProduitComponent,
    //ModifierProduitComponent,

  ],
  imports: [
    CommonModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
