import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InclusaoComponent } from '../inclusao/inclusao.component';
import { SobreComponent } from '../sobre/sobre.component';
import { SuplementoComponent } from '../suplemento/suplemento.component';
import { MarcaComponent } from '../marca/marca.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: 'inclusao', component: InclusaoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'suplemento', component: SuplementoComponent },
  { path: 'marca', component: MarcaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



  
      
      //const routes: Routes = [
       // { path: '', redirectTo: 'inicio', pathMatch: 'full' },
       