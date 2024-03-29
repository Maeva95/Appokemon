import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent
  ],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.scss'
})
export class EditPokemonComponent implements OnInit{
  pokemon: PokemonModel|undefined

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon)
    } else {
      this.pokemon = undefined
    }
  }
}
