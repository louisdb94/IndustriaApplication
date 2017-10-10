import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { PostsService } from './posts/posts.service';
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
    <header>
    <md-toolbar color="primary">
     <a [routerLink]="['/']" class="logotTxt">HOME</a>
   <a class="links" [routerLink]="['/posts']">Posts</a>
   <a class="links" [routerLink]="['/react']">react</a>
    </md-toolbar>
    </header>
      <router-outlet></router-outlet>
    <footer>
    </footer>
  `,
  providers: [PostsService]
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
