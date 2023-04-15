import { Pipe, PipeTransform } from '@angular/core';
import { DailyInfectedData } from '../../interfaces/DailyInfectedData';

@Pipe({
  name: 'coronavirusData'
})
export class CoronavirusDataPipe implements PipeTransform {

  transform(infectedData: DailyInfectedData, iWantTheTruth: boolean = false): any {
    const newInfections = iWantTheTruth
      ? this.getRandomNumber(1, 500)
      : this.calculateNewInfections(infectedData.numberOfNewTests);

    infectedData = iWantTheTruth ? infectedData : this.modifyInfectedData(infectedData);

    return {
      reportedDate: infectedData.reportedDate,
      newInfections: newInfections,
      numberOfNewTests: infectedData.numberOfNewTests,
      numberOfPeopleInHospital: infectedData.numberOfPeopleInHospital,
      iWantTheTruth: iWantTheTruth,
    };
  }

  private calculateNewInfections(numberOfTests: number): number {
    const maxInfectionLimit = numberOfTests * 0.05;
    return this.getRandomNumber(1, Math.min(maxInfectionLimit, 500));
  }

  private modifyInfectedData(infectedData: DailyInfectedData): DailyInfectedData {
    return {
      ...infectedData,
      numberOfNewTests: infectedData.numberOfNewTests * 2,
      numberOfPeopleInHospital: Math.floor(infectedData.numberOfPeopleInHospital / 3)
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
