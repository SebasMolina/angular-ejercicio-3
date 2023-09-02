import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  busqueda: string="";
  
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe(data => {
      this.personajes = data.results
    })
    console.log(this.personajes)
  }

  
}
