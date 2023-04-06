import { Component, ElementRef, ViewChild } from '@angular/core';
import { Timezone } from 'src/interfaces/timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TimeZone';

  timezones: Timezone[] = [];
  availableTimezones: string[] = [
    'Europe/Budapest',
    'US/Hawaii',
    'Europe/Andorra',
    'Atlantic/Bermuda',
    'America/Toronto',
    'Indian/Christmas',
    'Europe/London',
    'Pacific/Apia',
    'Africa/Johannesburg',
    'Africa/Tunis',
  ];
  timezoneLimit: number = 5;
  @ViewChild('selectedTimezone') selectedTimezone: ElementRef<HTMLSelectElement> | undefined;


  timezoneChanged(timezoneId: number): void {
    this.timezones.forEach((element, _) => {
      if (element.id == timezoneId) {
        element.isCurrentTimezone = true;
      } else {
        element.isCurrentTimezone = false;
      }
    });
  }

  addNewTimezone(): void {
    if (this.timezones.length <= this.timezoneLimit) {
      const selectedTimezoneValue = this.selectedTimezone!.nativeElement.value;

      this.timezones.push({
        id: this.timezones.length,
        name: selectedTimezoneValue,
        isCurrentTimezone: false
      })

      this.updateAvailableTimezoneList(selectedTimezoneValue);
    }
  }

  updateAvailableTimezoneList(selectedTimezoneValue: string): void {
    const index = this.availableTimezones.indexOf(selectedTimezoneValue, 0);

    if (index > -1) {
      this.availableTimezones.splice(index, 1);
    }
  }
}