import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inclusao',
  templateUrl: './inclusao.component.html',
  styleUrls: ['./inclusao.component.scss']
})
export class InclusaoComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
      }
  modal = {
    show: false,
    titulo: '',
    texto: '',
  };



 
  Evento(event: string) {
    this.modal.show = true;
    this.modal.titulo = 'Alerta!';
    this.modal.texto = event;
  }
  onCloseModal() {
    this.modal.show = false;
  }

}



