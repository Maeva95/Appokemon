import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { PokemonModel } from "./pokemon.model";
import { error } from "console";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<PokemonModel[]> {
        return this.http.get<PokemonModel[]>('api/pokemons').pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined)
            )
        )
    }

    getPokemonById(pokeminId: number): Observable<PokemonModel|undefined> {
        return this.http.get<PokemonModel>(`api/pokemons/${pokeminId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined))
        )
    }

    private log(response: PokemonModel[]|PokemonModel|undefined) {
        console.table(response)
    }
    private handleError(error: Error, errorValue: any) {
        console.error(error)
        return of(errorValue)
    }

    getPokemonTypeList() : string[] {
        return [
            'Feu', 
            'Eau', 
            'Plante', 
            'Insecte', 
            'Normal', 
            'Vol', 
            'Poison', 
            'Fée', 
            'Psy', 
            'Electrik', 
            'Combat' 
        ]
    }
}