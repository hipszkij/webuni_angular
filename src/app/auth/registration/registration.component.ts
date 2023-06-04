import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<string>('', Validators.required),
    });
  }

  public register(): void {
    if (this.registrationForm.valid) {

      const user: User = {
        name: this.registrationForm.value.name,
        email: this.registrationForm.value.email,
        phone: this.registrationForm.value.phone
      }

      this.authService.registerUser(user);
      this.reloadPage();
    }
  }

  private reloadPage(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['']);
    });
  }
}
