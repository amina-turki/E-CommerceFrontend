import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifiercatComponent  } from './modifiercat.component';


const routes: Routes = [
  {
    path: '',
    component: ModifiercatComponent,
    data: {
      breadcrumb: 'PRODUITS',
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
export class ModuleModifierCatRoutingModule { }
