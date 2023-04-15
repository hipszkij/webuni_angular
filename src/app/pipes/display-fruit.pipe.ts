import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from '../app.component';

@Pipe({
  name: 'displayFruit'
})
export class DisplayFruitPipe implements PipeTransform {

  transform(fruit: Fruit, isHated: boolean = false): string {
    if (isHated) {
      return `${fruit.name} :((`;
    } else if (fruit.score > 5) {
      return `${fruit.name} :)`;
    } else {
      return fruit.name;
    }
  }
}
