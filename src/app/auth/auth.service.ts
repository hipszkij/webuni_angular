import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private numberOfTranslationStorageKey: string = 'numberOfTranslation';
  private userStorageKey: string = 'user';
  private _currentUser = new BehaviorSubject<User | undefined>(undefined);

  constructor() { }

  public incrementTranslationNumber() {
    let numberOfTranslation: number = 1;
    let count = localStorage.getItem(this.numberOfTranslationStorageKey);

    if (count) {
      numberOfTranslation = parseInt(count) + 1;
    }

    localStorage.setItem(this.numberOfTranslationStorageKey, numberOfTranslation.toString());
  }

  public getNumberOfTranslation(): number {
    let count = localStorage.getItem(this.numberOfTranslationStorageKey);

    return count ? parseInt(count!) : 0;
  }

  public getUserData(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }

  public isRegistrated(): boolean {
    const user: User = this.getUserData();

    return user === null ? false : true;
  }

  public isAuthenticated(): boolean {
    return (!this.getNumberOfTranslation() || this.getNumberOfTranslation() < 3) || this.isRegistrated();
  }

  public registerUser(user: User): void {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    this._currentUser.next(user);
  }

  public get currentUser(): Observable<User | undefined> {
    return this._currentUser.asObservable();
  }
}
