import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './util/app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTE1Component } from './componente1/componente1.component';
import { Componente3Component } from './componente3/componente3.component';
import { InclusaoComponent } from './inclusao/inclusao.component';
import { SuplementoComponent } from './suplemento/suplemento.component';
import { MarcaComponent } from './marca/marca.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { AcaoComponent } from './acao/acao.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTE1Component,
    Componente3Component,
    InclusaoComponent,
    SuplementoComponent,
    MarcaComponent,
    SobreComponent,
    LoginComponent,
    AcaoComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
