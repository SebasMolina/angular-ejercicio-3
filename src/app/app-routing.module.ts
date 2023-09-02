import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';

const routes: Routes = [
  {path:'', component:ListaPersonajesComponent},
  {path:'personaje/:id',component:DetallePersonajesComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
