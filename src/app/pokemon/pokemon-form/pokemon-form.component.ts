import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon.model';
import { types } from 'util';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    FormsModule
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {
  @Input()
  pokemon!: PokemonModel
  types!: string[]
  isAddForm!: boolean

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList()
    this.isAddForm = this.router.url.includes('add')
  }
  hasType(type: string): boolean {
    return this.pokemon.types?.includes(type)
  }
  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked
    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1)
    }
  }

  isTypesValid(type: string) : boolean {
    if(this.pokemon.types?.length === 1 && this.hasType(type)) {
      return false
    }
    if(this.pokemon.types?.length > 2 && !this.hasType(type)) {
      return false
    }
    return true
  }

  onSubmit() {
    if(this.isAddForm) {
      this.pokemonService.addNewPokemon(this.pokemon)
        .subscribe((pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }

}
