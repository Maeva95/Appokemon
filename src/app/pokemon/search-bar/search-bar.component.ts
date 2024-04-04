import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { PokemonModel } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>()
  pokemonList$!: Observable<PokemonModel[]>

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit() {
    this.pokemonList$ = this.searchTerms.pipe(
      debounceTime(300),
      // attend que l'user arrête de taper 
      distinctUntilChanged(),
      // attend que le texte de recherche change
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // envoie la demande de recherche au service
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: PokemonModel) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}