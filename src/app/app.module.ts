import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { PodiumComponent } from './podium/podium.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsTableComponent,
    PodiumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
