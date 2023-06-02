import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Language } from '../models/language.model';
import { DictionaryService } from '../dictionary.service';

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
    private dictionaryService: DictionaryService
  ) {
    this.dictionaryForm = new FormGroup({
      languageFrom: new FormControl<string>(this.selectedFromLanguage),
      languageTo: new FormControl<string>(this.selectedToLanguage),
      textFrom: new FormControl<string>('', Validators.required),
      textTo: new FormControl<string>(''),
    });
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  private getLanguages(): void {
    this.dictionaryService.getLanguages().subscribe(result => {
      this.languages = result;
      const autoRecognize = { code: 'auto', name: 'Autómatikus felismerés', targets: [] };

      this.languages.unshift(autoRecognize);
    });
  }

  public translate(): void {
    let formData = new FormData();
    formData.append("q", this.dictionaryForm.value.textFrom);
    formData.append("source", this.dictionaryForm.value.languageFrom);
    formData.append("target", this.dictionaryForm.value.languageTo);
    formData.append("format", "text");

    this.dictionaryService.translate(formData).subscribe(result => {
      this.dictionaryForm.patchValue({ textTo: result['translatedText'] });
    })
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

}
