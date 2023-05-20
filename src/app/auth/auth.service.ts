import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl = `${environment.baseUrl}/auth`;
  private _currentUser = new BehaviorSubject<User | undefined>(undefined);
  private readonly loggedInUserKey: string = 'loggedInUser';

  constructor(private http: HttpClient, private router: Router) {
    this.checkUserSession();
  }

  private checkUserSession(): void {
    const user: string = localStorage.getItem(this.loggedInUserKey)!;

    if (user) {
      this._currentUser.next(JSON.parse(user));

      this.sessionInfo().subscribe((isLoggedIn: any) => {
        if (!isLoggedIn) {
          this.handleLogout();
        }
      })
    }
  }

  private sessionInfo(): any {
    return this.http.get<{ isLoggedIn: boolean }>(`${this._baseUrl}/sessionInfo`).pipe(
      map(sessionInfo => sessionInfo.isLoggedIn)
    )
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this._baseUrl}/login`, { email, password }).pipe(
      tap(user => {
        this._currentUser.next(user);
        this.storeUserAfterLogin(user);
      })
    );
  }

  public logout(): any {
    return this.http.post(`${this._baseUrl}/logout`, null).pipe(
      tap(_ => {
        this.handleLogout();
      })
    );
  }

  public registration(email: string, password: string): Observable<any> {
    return this.http.post<{ id: string, email: string, name: string }>(`${this._baseUrl}/registration`, { email, password });
  }

  private handleLogout(): void {
    this.clearLocalStorage();
    this._currentUser.next(undefined);
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): boolean {
    return this._currentUser.getValue() !== undefined
  }

  public get currentUser(): Observable<User | undefined> {
    return this._currentUser.asObservable();
  }

  private storeUserAfterLogin(user: User): void {
    localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
  }

  private clearLocalStorage(): void {
    localStorage.removeItem(this.loggedInUserKey);
  }
}
