import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  getTitle(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/1`)
      .pipe(map(post => post.title));
  }
}
