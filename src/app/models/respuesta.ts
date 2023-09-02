import { Personaje } from "./personaje";

export interface Respuesta {
    info:string;
    results: Personaje[];
}
