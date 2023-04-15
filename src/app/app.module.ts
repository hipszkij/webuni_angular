import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoronavirusDataPipe } from './pipes/coronavirus-data.pipe';
import { ColorizedDataDirective } from './directives/colorized-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoronavirusDataPipe,
    ColorizedDataDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
