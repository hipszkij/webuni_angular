import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  @Input() podium: string[] | undefined;
  @Output() hidePodiumEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hidePodium(): void {
    this.hidePodiumEmitter.emit();
  }
}
