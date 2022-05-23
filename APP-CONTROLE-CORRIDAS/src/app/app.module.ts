import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTE1Component } from './componente1/componente1.component';
import { Componente3Component } from './componente3/componente3.component';
import { InclusaoComponent } from './inclusao/inclusao.component';
import { SuplementoComponent } from './suplemento/suplemento.component';
import { MarcaComponent } from './marca/marca.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTE1Component,
    Componente3Component,
    InclusaoComponent,
    SuplementoComponent,
    MarcaComponent,
    SobreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
