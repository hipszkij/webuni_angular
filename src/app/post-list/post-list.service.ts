import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const params = { _limit: '10' };

    return this.http.get<Post[]>(this.apiUrl, { params })
      .pipe(
        map(posts => posts.map(post => ({ id: post.id, title: post.title })))
      );
  }

  deletePost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
