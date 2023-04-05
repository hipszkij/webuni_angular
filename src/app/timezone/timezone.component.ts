import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',

  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input()
  timezone: {
    name: string,
    isUserTimezone: boolean
  } | undefined;

  @Output()
  changeTimezone = new EventEmitter<object>();

  currentTime: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentTimeForTimezone();
  }

  getCurrentTimeForTimezone(): void {
    this.currentTime = new Date().toLocaleString("hu-HU", { timeZone: this.timezone?.name });
  }

  setCurrentTimezone(): void {
    this.timezone!.isUserTimezone = true;
    this.changeTimezone.emit({
      timezoneName: this.timezone!.name,
      isUserTimezone: this.timezone!.isUserTimezone
    });
  }
}
