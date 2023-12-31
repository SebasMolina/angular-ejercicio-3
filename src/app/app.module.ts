import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesModule } from './lista-personajes/lista-personajes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DetallePersonajesModule } from './detalle-personajes/detalle-personajes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ListaPersonajesModule,
    DetallePersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
