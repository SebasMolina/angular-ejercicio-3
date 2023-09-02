import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../lista-personajes/personajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../models/personaje';
import { Respuesta } from '../models/respuesta';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent implements OnInit {

  id:string='';
  personaje!:Personaje;
  constructor(
    private personajesService: PersonajesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "";
    this.personajesService.getPersonaje(this.id).subscribe(data => {
      console.log(data)
      this.personaje=data;
    })
    
  }
  

}
