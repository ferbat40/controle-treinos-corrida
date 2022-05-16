import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import * as M from 'materialize-css';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class COMPONENTE1Component implements OnInit {
  selecao="";
  @ViewChild('mobile') sideNav?: ElementRef;
  
  constructor() {  
   
  }

  ngOnInit(): void {
  let $sideNav = $('#mobile-demo')
  //M.Sidenav.init(this.sideNav?.nativeElement);
  M.Sidenav.init($sideNav);
  }
 

  

  selCorrida() {
  this.selecao ="Inclusão de corridas Selecionada";
    
  return this.selecao;
  }

  selSuplementos(){
    this.selecao ="Suplementos Selecionado";
    return this.selecao;
  }

  selMarcas(){
    this.selecao ="Marcas Selecionada";
    return this.selecao;
  }

  selSobre(){
    this.selecao ="Sobre Selecionado";
    return this.selecao;
  }

}

