import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countryList } from '../../data/countryList';
import { Country } from '../interface/country.interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  public contactForm: FormGroup;
  public countryList: Country[] = [];

  constructor() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        postcode: new FormControl(),
      })
    });

    this.countryList = countryList;
  }

  public submitted(): void {
    console.log(this.contactForm.value);
  }
}
