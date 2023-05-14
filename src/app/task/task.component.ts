import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Task[] | undefined;
  @Output() taskCompleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  markTaskCompleted(taskId: number) {
    this.taskCompleted.emit(taskId);
  }
}
