import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Első angular alkalmazásom';
  counter = {name: 'Mosogatás', id: 1};
  aim: number  = 5;
  logoSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isComplete: boolean = false;
  counterCount: number = 0;
  counters: {name: string, id: number, aim: number}[] = [];

  countChanged(count: number) {
    if (count == this.aim) {
      this.isComplete = true;
      alert('Cél elérve');
    }

    if (count == 3) {
      this.aim = 10;
      this.counter = {name: 'Teregetés', id: 2};
    }
  }

  counterCountChanged() {
    const diff = this.counterCount - this.counters.length;

    if (diff > 0) {
      const newCounters = new Array(diff).fill(undefined).map((_, i) => {
        return {name:'', id: i + this.counterCount, aim: 10};
      });

      this.counters = [...this.counters, ...newCounters];
    } else if (diff < 0) {
      this.counters.splice(this.counterCount);
    }
  }
}
