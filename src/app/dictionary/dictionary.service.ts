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
  private _apiKey = `${environment.apiKey}`;

  constructor(private http: HttpClient) { }

  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this._baseUrl}/languages`);
  }

  public translate(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this._baseUrl}/translate`, formData);
  }

  public autodetect(text: string): Observable<any> {
    return this.http.post<any>(`${this._baseUrl}/detect`, { q: text, api_key: this._apiKey });
  }
}
