import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inclusao',
  templateUrl: './inclusao.component.html',
  styleUrls: ['./inclusao.component.scss']
})
export class InclusaoComponent implements OnInit {
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
