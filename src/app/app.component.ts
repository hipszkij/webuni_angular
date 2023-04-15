import { Component } from '@angular/core';

export interface Fruit {
  name: string;
  score: number;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = 'Lorem ipsum';

  hatedFruits = [
    'narancs',
    'barack',
  ];

  fruits: Fruit[] = [
    {name: 'alma', score: 4, color: 'red',},
    {name: 'banán', score: 10, color: 'yellow',},
    {name: 'narancs', score: 0, color: 'orange',},
    {name: 'szilva', score: 3, color: 'plum',},
    {name: 'szölő', score: 7, color: 'green',},
    {name: 'barack', score: 6, color: 'pink',},
  ];


}
