import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleModifierCatRoutingModule } from './module-modifier-cat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifiercatComponent } from './modifiercat.component';



@NgModule({
  declarations: [ModifiercatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleModifierCatRoutingModule
  ]
})
export class ModuleModifierCatModule { }
