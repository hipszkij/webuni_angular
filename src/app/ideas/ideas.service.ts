import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idea } from './models/idea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private _baseUrl = `${environment.baseUrl}/ideas`;

  constructor(private http: HttpClient) { }

  public listIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(`${this._baseUrl}`);
  }

  public upvoteIdea(idea: Idea): Observable<any> {
    return this.http.patch<{ id: string }>(`${this._baseUrl}/${idea.id}/upvote`, null);
  }

  public downvoteIdea(idea: Idea): Observable<any> {
    return this.http.patch<{ id: string }>(`${this._baseUrl}/${idea.id}/downvote`, null);
  }

  public deleteIdea(idea: Idea): Observable<any> {
    return this.http.delete<{ id: string }>(`${this._baseUrl}/${idea.id}`);
  }
}
