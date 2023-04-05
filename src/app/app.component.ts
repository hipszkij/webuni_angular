import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimeZone';

  timezone1 = {
    name: 'Europe/Budapest',
    isUserTimezone: true
  };

  timezone2 = {
    name: 'US/Hawaii',
    isUserTimezone: false
  };

  timezoneChanged(changes: any): void {
    if (this.timezone1.name == changes.timezoneName) {
      this.timezone1.isUserTimezone = changes.isUserTimezone;
      this.timezone2.isUserTimezone = !changes.isUserTimezone;
    } else {
      this.timezone2.isUserTimezone = changes.isUserTimezone;
      this.timezone1.isUserTimezone = !changes.isUserTimezone;
    }
  }
}
