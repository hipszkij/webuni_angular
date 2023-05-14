import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  protected name: string = '';
  protected desc: string = '';

  constructor(private taskService: TaskService, private router: Router,) { }

  ngOnInit(): void {}

  saveTask(): void {
    if (this.name.trim() !== '' && this.desc.trim() !== '') {
      this.taskService.createTask(this.name, this.desc);
      this.router.navigate(['/taskboard']);
    }
  }
}
