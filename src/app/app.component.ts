import { Component } from '@angular/core';
import { DailyInfectedData } from '../interfaces/DailyInfectedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dailyInfected!: DailyInfectedData[];

  constructor() {
    this.initData();
  }

  private initData(): void {
    for (let i = 0; i < 10; i++) {
      this.dailyInfected.push({
        numberOfNewTests: Math.floor(Math.random() * 500) + 1,
        numberOfPeopleInHospital: 10,
      });
    }
  }

}


