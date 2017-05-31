import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
