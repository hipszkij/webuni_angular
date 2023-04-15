import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Fruit } from '../app.component';

@Directive({
  selector: '[appFruit]'
})
export class FruitDirective {

  private _fruit!: Fruit;

  @Input('appFruit') set fruit(fruit: Fruit) {
    this._fruit = fruit;

    this.formatFruit();
  }

  get fruit() {
    return this._fruit;
  }

  constructor(private element: ElementRef<HTMLElement>) { }

  private formatFruit(): void {
    this.element.nativeElement.style.backgroundColor = this._fruit.color;
    this.element.nativeElement.style.padding = '4px 8px';
    this.element.nativeElement.style.borderRadius = '6px';
    this.element.nativeElement.style.textAlign = 'center';
    this.element.nativeElement.style.color = 'black';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')
  onMOuseLeave() {
    this.formatFruit();
  }
}
