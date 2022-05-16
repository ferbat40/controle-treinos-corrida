import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.scss']
})
export class Componente3Component implements OnInit {
   year?: number;
  constructor() { 
    this.year=new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
