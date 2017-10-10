import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `

  <nav class="navbar navbar-fixed-top navbar-dark bg-inverse" >
    <div class="container">
        <a class="navbar-brand">Angular Router</a>
        <ul class="nav navbar-nav" routerLinkActive="active">
          <li class="nav-item"><a class="nav-link" routerLink="home" routerLinkActive="active">Home</a></li>

        </ul>
    </div>
</nav>



      <router-outlet></router-outlet>
    <footer>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Mean stack starter';
  public url = 'https://mean.io';

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
