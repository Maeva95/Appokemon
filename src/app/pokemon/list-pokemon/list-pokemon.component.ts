import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonModel } from '../pokemon.model';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DatePipe,
    RouterLink,
    NgFor,
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})

export class ListPokemonComponent implements OnInit {
  
  pokemonList!: PokemonModel[]

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}
      
  ngOnInit(): void {
    this.getPokemonList()
  }
  private getPokemonList() {
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList)
  }
  
  goToPokemonId(pokemon: PokemonModel) {
    this.router.navigate(['/pokemons', pokemon.id])
  }
}

