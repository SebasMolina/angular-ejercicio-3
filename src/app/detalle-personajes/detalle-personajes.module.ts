import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePersonajesComponent } from './detalle-personajes.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetallePersonajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class DetallePersonajesModule { }
