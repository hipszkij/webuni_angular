import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Első angular alkalmazásom';
  counter = {name: 'Mosogatás', id: 1};
  aim = 5;
  logoSrc = 'https://angular.io/assets/images/logos/angular/angular.png';

  countChanged(count: number) {
    if (count == this.aim) {
      alert('Cél elérve');
    }
  }
}
