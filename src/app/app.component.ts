import { Component } from '@angular/core';
import { User } from './auth/interfaces/user.interface';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User | undefined;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUserData();
  }
}
