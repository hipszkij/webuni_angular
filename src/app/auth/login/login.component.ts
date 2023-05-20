import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  public login(): void {
    this.authService.login(this.email, this.password).subscribe(_ => this.router.navigateByUrl('/ideas'));
  }

  public registration(): void {
    this.router.navigateByUrl('/registration');
  }
}
