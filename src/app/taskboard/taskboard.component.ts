import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  protected tasks: Task[] | undefined;
  protected completedTasks: Task[] | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.tasks = this.taskService.getTasks().filter(task => !task.isCompleted);
    this.completedTasks = this.taskService.getTasks().filter(task => task.isCompleted);
  }

  protected setTaskCompleted(taskId: number): void {
    this.taskService.setTaskCompleted(taskId);

    this.initData();
  }
}
