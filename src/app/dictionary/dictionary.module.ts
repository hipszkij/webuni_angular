import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateComponent } from './translate/translate.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';



@NgModule({
  declarations: [
    TranslateComponent,
  ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
  ]
})
export class DictionaryModule { }
