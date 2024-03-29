import { Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

export default [
    {
        path: '',
        providers: [PokemonService],
        children: [
            {
                path: 'pokemons',
                title: 'Pokédex',
                loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent),
            },
            {
                path: 'pokemon/:id',
                loadComponent: () => import ('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent),
            },
            {
                path: 'edit/pokemon/:id',
                loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent),
            },
        
        ]
    },
] as Routes;
