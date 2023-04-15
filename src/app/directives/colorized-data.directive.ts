import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorizedData]'
})
export class ColorizedDataDirective {
  private _infectedData!: any;

  @Input('appColorizedData') set infectedData(data: any) {
    this._infectedData = data;

    this.formatData();
  }

  constructor(private element: ElementRef<HTMLElement>) { }

  private formatData(): void {
    const pozitivTestRate = this.getPozitivTestRate();

    this.element.nativeElement.style.color = 'green';

    if (pozitivTestRate >= 2.5) {
      this.element.nativeElement.style.color = 'red';
    }

    if (this._infectedData.iWantTheTruth) {
      this.element.nativeElement.style.background = 'DodgerBlue';
    } else {
      this.element.nativeElement.style.background = 'white';
    }
  }

  private getPozitivTestRate(): number {
    return (this._infectedData.newInfections / this._infectedData.numberOfNewTests) * 100;
  }
}
