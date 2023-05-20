import { Component, OnInit } from '@angular/core';
import { Idea } from '../models/idea.model';
import { IdeasService } from '../ideas.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.scss']
})
export class ListIdeasComponent implements OnInit {
  public ideas: Idea[] = [];

  constructor(private ideaService: IdeasService) { }

  ngOnInit(): void {
    this.listIdeas();
  }

  private listIdeas() {
    this.ideaService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }

  public vote(operation: string, idea: Idea): void {
    if (operation == "+") {
      this.upvote(idea);
    } else {
      this.downvote(idea);
    }
  }

  private upvote(idea: Idea) {
    this.ideaService.upvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  private downvote(idea: Idea) {
    this.ideaService.downvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  public delete(idea: Idea) {
    this.ideaService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }
}
