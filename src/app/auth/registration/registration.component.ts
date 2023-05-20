import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public email: string | undefined;
  public password: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  public registration(): void {
    if (this.email?.trim() !== '' && this.password !== '') {
      this.authService.registration(this.email!, this.password!).subscribe(result => {
        if (result.id) {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }
}