import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap, throwError } from "rxjs";
import { PokemonModel } from "./pokemon.model";


@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<PokemonModel[]> {
        return this.http.get<PokemonModel[]>('api/pokemons').pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        );
    }

    getPokemonById(pokemonId: number): Observable<PokemonModel|undefined> {
        return this.http.get<PokemonModel>(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        )
    }

    deletePokemonById(pokemonId: number): Observable<PokemonModel|undefined> {
        return this.http.delete<PokemonModel>(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        )
    }

    addNewPokemon(pokemon: PokemonModel): Observable<PokemonModel> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json'})
        }
        return this.http.post<PokemonModel>('api/pokemons/', pokemon, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        )
    }
    updatePokemon(pokemon: PokemonModel): Observable<PokemonModel> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json'})
        }
        return this.http.put<PokemonModel>('api/pokemons/', pokemon, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        )
    }

    searchPokemonList(term: string): Observable<PokemonModel[]> {
        if(term.length <= 1) {
            return of([])
        }
        return this.http.get<PokemonModel[]>(`api/pokemons/?name=${term}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error))
        )
    }

    private log(response: any) {
        console.table(response)
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error(`Une erreur s'est produite`, error.error)
        } else {
            console.error(`Le serveur a retourné le code ${error.status}, body est: `, error.error)
        }
        return throwError(() => new Error('Something bad happened'))
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