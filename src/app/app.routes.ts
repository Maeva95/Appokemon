import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    {path: 'edit/pokemon/:id', component: EditPokemonComponent},
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent}
];
