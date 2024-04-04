import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="footer">
    <div class="content has-text-centered">
        <strong>Créé par </strong> <a href="">Maeva Tarati</a>
        <ul class="list-footer is-flex is-justify-content-center is-align-items-center">
          <li class="item-footer">
            <a href="https://github.com/Maeva95/Appokemon">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li class="item-footer">
            <a href="https://portfolio-maeva-tarati.vercel.app/">
              <i class="fa-solid fa-globe"></i>
            </a>
          </li>
        </ul>
    </div>
  </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
