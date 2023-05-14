import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'taskboard',
    component: TaskboardComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'taskboard/create-task',
    component: TaskCreateComponent,
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
