import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Language } from '../models/language.model';
import { DictionaryService } from '../dictionary.service';
import { map } from 'rxjs';
import { Translate } from '../interfaces/translate.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  public dictionaryForm: FormGroup;
  public languages: Language[] = [];
  public selectedFromLanguage: string = "en";
  public selectedToLanguage: string = "hu";

  constructor(
    private dictionaryService: DictionaryService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.dictionaryForm = new FormGroup({
      languageFrom: new FormControl<string>(this.selectedFromLanguage),
      languageTo: new FormControl<string>(this.selectedToLanguage, this.notAutoValidator()),
      textFrom: new FormControl<string>('', Validators.required),
      textTo: new FormControl<string>(''),
    });
  }

  ngOnInit(): void {
    this.loadLanguages();
  }

  private loadLanguages(): void {
    this.dictionaryService.getLanguages().subscribe(result => {
      this.languages = result;
      const autoRecognize = { code: 'auto', name: 'Auto detection', targets: [] };

      this.languages.unshift(autoRecognize);
    });
  }

  public translateText(): void {
    let languageFrom = this.dictionaryForm.value.languageFrom;

    if (languageFrom == 'auto') {
      this.dictionaryService.autodetect(this.dictionaryForm.value.textFrom).pipe(
        map(result => {
          const translateData: Translate = {
            q: this.dictionaryForm.value.textFrom,
            source: result[0].language,
            target: this.dictionaryForm.value.languageTo,
            format: "text",
          };
          return this.createFormData(translateData);
        })
      ).subscribe(formData => {
        this.translate(formData);
      });
    } else {
      const translateData: Translate = {
        q: this.dictionaryForm.value.textFrom,
        source: languageFrom,
        target: this.dictionaryForm.value.languageTo,
        format: "text",
      };
      const formData: FormData = this.createFormData(translateData);
      this.translate(formData);
    }
  }


  private createFormData(translateData: Translate): FormData {
    let formData = new FormData();
    formData.append("q", translateData.q!);
    formData.append("source", translateData.source!);
    formData.append("target", translateData.target!);
    formData.append("format", translateData.format!);

    return formData;
  }


  private translate(formData: FormData): void {
    this.dictionaryService.translate(formData).subscribe(result => {
      this.dictionaryForm.patchValue({ textTo: result['translatedText'] });
      this.authService.incrementTranslationNumber();

      if (!this.authService.isAuthenticated()) {
        this.navigateToRegistrationPage();
      }
    });
  }

  private navigateToRegistrationPage(): void {
    this.router.navigate(['registration']);
  }

  public clearForm() {
    this.dictionaryForm.patchValue({
      textFrom: '',
      textTo: '',
      languageFrom: this.selectedFromLanguage,
      languageTo: this.selectedToLanguage
    });
    this.dictionaryForm.markAsUntouched();
  }

  private notAutoValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const languageTo = control.value;
      if (languageTo === 'auto') {
        return { notAuto: true };
      }
      return null;
    };
  }
}
