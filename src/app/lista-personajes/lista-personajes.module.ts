import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonajesComponent } from './lista-personajes.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaPersonajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class ListaPersonajesModule { }
