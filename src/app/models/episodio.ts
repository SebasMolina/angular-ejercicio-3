import { Personaje } from "./personaje";

export interface Episodio {
    id: number;
    name: string;
    episode: String;
    Personajes: Array<Personaje>;
}
