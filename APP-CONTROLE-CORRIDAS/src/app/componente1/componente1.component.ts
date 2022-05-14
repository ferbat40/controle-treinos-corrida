import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import * as M from 'materialize-css';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class COMPONENTE1Component implements OnInit {
  titulo="fer";
  @ViewChild('mobile') sideNav?: ElementRef;
  
  constructor() {  
   
  }

  ngOnInit(): void {
  let $sideNav = $('#mobile-demo')
  //M.Sidenav.init(this.sideNav?.nativeElement);
  M.Sidenav.init($sideNav);
  }
 
  

  adicionar() {
 
    const numero = Math.round(Math.random() * 100);
    this.titulo = 'texto ' + numero;
  }




}

