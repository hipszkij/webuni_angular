import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() aim = 10;
  @Input() counter: {name: string, id: number} | undefined;
  @Output() countChange = new EventEmitter<number>();
  count = 0;
  @ViewChild('btn') buttonRef: ElementRef<HTMLButtonElement> | undefined;

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    //this.buttonRef!.nativeElement.textContent = 'Set from TS';
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  incrementCounter() {
    this.count++;
    this.countChange.emit(this.count);
  }

  get isComplete(): boolean {
    return this.count >= this.aim;
  }


}
