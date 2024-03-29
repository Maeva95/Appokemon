import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe, 
    DatePipe
  ],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{
  pokemonList!: PokemonModel[]
  pokemon!: PokemonModel|undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon)
    }
  }

  deletePokemon(pokemon: PokemonModel) {
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goToPokemonList())
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }

  goToEditPokemon(pokemon: PokemonModel) {
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }
}
