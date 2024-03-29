import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon.model';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent
  ],
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent implements OnInit {
  pokemon!: PokemonModel

  ngOnInit(): void {
    this.pokemon = new PokemonModel()
  }
}
