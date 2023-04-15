import { Component, HostListener } from '@angular/core';
import { DailyInfectedData } from '../interfaces/DailyInfectedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dailyInfected: DailyInfectedData[] = this.initData();
  iWantTheTruth: boolean = false;

  constructor() { }

  private initData(): DailyInfectedData[] {
    const dailyInfected: DailyInfectedData[] = [];

    for (let i = 0; i < 10; i++) {
      dailyInfected.push({
        reportedDate: this.getRandomDate(),
        numberOfNewTests: this.getRandomNumber(1, 5000),
        numberOfPeopleInHospital: this.getRandomNumber(1, 5000),
        newInfections: 0,
      })
    }

    return this.sortData(dailyInfected);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.altKey && event.code === 'KeyT') {
      this.iWantTheTruth = !this.iWantTheTruth;
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomDate(): string {
    const start = new Date(2020, 11, 1);
    const end = new Date(2021, 5, 30);
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());

    return new Date(randomTime).toLocaleDateString('hu-HU');
  }

  private sortData(data: DailyInfectedData[]): DailyInfectedData[] {
    return data.sort((a, b) => new Date(a.reportedDate).getTime() - new Date(b.reportedDate).getTime());
  }
}
