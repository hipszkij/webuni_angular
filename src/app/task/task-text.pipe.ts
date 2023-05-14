import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../interfaces/task';

@Pipe({
  name: 'taskText'
})
export class TaskTextPipe implements PipeTransform {

  transform(task: Task): string {
    const { name, desc, username } = task;
    return `${name} - ${desc} (${username})`;
  }
}
