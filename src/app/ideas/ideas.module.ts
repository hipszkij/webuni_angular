import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ListIdeasComponent } from './list-ideas/list-ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { VoteComponent } from './vote/vote.component';
import { IdeasRoutingModule } from './ideas-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    IdeaComponent,
    NewIdeaComponent,
    ListIdeasComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class IdeasModule { }
