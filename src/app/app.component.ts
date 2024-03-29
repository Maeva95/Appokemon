import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    ListPokemonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: '../assets/styles/main.scss',
})
export class AppComponent {
  title = 'Appokemon';
}
