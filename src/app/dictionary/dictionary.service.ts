import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Language } from './models/language.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this._baseUrl}/languages`);
  }

  public translate(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this._baseUrl}/translate`, formData);
  }
}
