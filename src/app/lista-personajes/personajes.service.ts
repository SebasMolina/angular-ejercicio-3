import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';
import { Episodio } from '../models/episodio';
import { Respuesta } from '../models/respuesta';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private apiUrl = environment.apiUrl;
  private personajesURI = this.apiUrl + "/character";
  private episodioURI = this.apiUrl + "/episode";
  
  constructor(private httpClient:HttpClient) {
    
  }

  getPersonajes():Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(this.personajesURI);
  }
  getPersonaje(id:string):Observable<Personaje>{
    return this.httpClient.get<Personaje>(this.personajesURI+"/"+id);
  }
  getEpisodios():Observable<Episodio>{
    return this.httpClient.get<Episodio>(this.episodioURI);
  }
  
  findByName(nombre:string):Observable<Array<Personaje>>{
    return this.httpClient.get<Array<Personaje>>(this.personajesURI + "/?name=" + nombre);
  }

}
