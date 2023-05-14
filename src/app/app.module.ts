import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from './services/local-storage.service';
import { TaskComponent } from './task/task.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { HeaderComponent } from './header/header.component';
import { TaskTextPipe } from './task/task-text.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    TaskboardComponent,
    TaskCreateComponent,
    HeaderComponent,
    TaskTextPipe,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
