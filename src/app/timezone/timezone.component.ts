import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timezone } from 'src/interfaces/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',

  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input()
  timezone: Timezone | undefined;

  @Output()
  changeTimezone = new EventEmitter<number>();

  currentTime: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentTimeForTimezone();
  }

  getCurrentTimeForTimezone(): void {
    this.currentTime = new Date().toLocaleString("hu-HU", { timeZone: this.timezone!.name });
  }

  setCurrentTimezone(): void {
    this.timezone!.isCurrentTimezone = true;
    this.changeTimezone.emit(this.timezone!.id);
  }
}
