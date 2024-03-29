import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pokemonTypeColor',
    standalone: true,
})

export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string) : string {
        
        let color: string
        switch (type) {
            case 'Feu':
                color = 'is-danger is-light'
                break;
            case 'Eau':
                color = 'is-link'
                break;
            case 'Plante':
                color = 'is-success'
                break;
            case 'Insecte':
                color = 'is-warning is-light'
                break;
            case 'Normal':
                color = 'is-light'
                break;
            case 'Vol':
                color = 'is-info is-light'
                break;
            case 'Poison':
                color = 'is-danger';
                break;
            case 'Fée':
                color = 'is-link is-light';
                break;
            case 'Psy':
                color = 'is-black';
                break;
            case 'Electrik':
                color = 'is-warning';
                break;
            case 'Combat':
                color = 'is-dark';
                break;
            default:
                color = 'grey';
                break;
        }
        return color
    }
}