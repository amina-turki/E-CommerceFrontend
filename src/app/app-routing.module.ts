import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'tableProduit',
        loadChildren: () => import('./FrontCommerce/Produit/afficher-produit/model-afficher-produit.module').then(m => m.ModelAfficherProduitModule)
      },
      
      {
        path: 'tableFcture',
        loadChildren: () => import('./FrontCommerce/Facture/afficher-facture/ModuleAfficherFacture.module').then(m => m.ModuleAfficherFactureModule)
      },
      {
        path: 'AjouterProduit',
        loadChildren: () => import('./FrontCommerce/Produit/ajouter-produit/model-ajouter-produit.module').then(m => m.ModelAjouterProduitModule)
      }, 

      {
        path: 'ModifierProduit/:id',
        loadChildren: () => import('./FrontCommerce/Produit/modifier-produit/model-modifier-produit.module').then(m => m.ModelModifierProduitModule)
      }, 
      {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
