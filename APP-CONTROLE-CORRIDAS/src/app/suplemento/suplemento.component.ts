import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suplemento',
  templateUrl: './suplemento.component.html',
  styleUrls: ['./suplemento.component.scss']
})
export class SuplementoComponent implements OnInit {
  modal = {
    show: false,
    titulo: '',
    texto: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  Evento(event: string) {
    this.modal.show = true;
    this.modal.titulo = 'Alerta!';
    this.modal.texto = event;
  }
  onCloseModal() {
    this.modal.show = false;
  }


}
