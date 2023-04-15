import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { DisplayFruitPipe } from './pipes/display-fruit.pipe';
import { FruitDirective } from './directives/fruit.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyUppercasePipe,
    DisplayFruitPipe,
    FruitDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
