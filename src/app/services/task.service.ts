import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Task } from 'src/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private localStorageService: LocalStorageService) { }

  public createTask(name: string, desc: string): void {
    const username: string = this.localStorageService.getItem('username');
    let tasksList: Task[] = this.getTaskFromStorage();

    let newTask: Task = {
      id: tasksList.length + 1,
      name: name,
      desc: desc,
      username: username,
      isCompleted: false
    }

    tasksList.push(newTask);
    this.localStorageService.setItem('tasks', JSON.stringify(tasksList));
  }

  public setTaskCompleted(taskId: number): void {
    let tasksList: Task[] = this.getTaskFromStorage();
    const taskIndex = tasksList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      tasksList[taskIndex].isCompleted = true;
      this.localStorageService.setItem('tasks', JSON.stringify(tasksList));
    }
  }

  public getTasks(): Task[] {
    return this.getTaskFromStorage();
  }

  private getTaskFromStorage(): Task[] {
    let tasksJson: string = this.localStorageService.getItem('tasks');
    let tasksList: Task[] = [];

    if (tasksJson) {
      tasksList = JSON.parse(tasksJson);
    }

    return tasksList;
  }
}
