import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected username: string | undefined;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  protected keyup(value: string): void {
    this.username = value;
  }

  protected login(): void {
    if (this.username!.trim() !== '') {
      this.localStorageService.setItem('username', this.username);
      this.router.navigate(['/taskboard']);
    }
  }
}
