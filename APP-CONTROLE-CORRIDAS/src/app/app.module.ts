import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTE1Component } from './componente1/componente1.component';
import { COMPONENTE2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTE1Component,
    COMPONENTE2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
