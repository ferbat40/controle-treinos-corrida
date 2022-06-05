import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  imgURL = 'https://lab.asics.com.br/static/7ca0093b65c722bc1b7cd5bb8f5fbfc2/06804/YtNe4sYUBHD9LTjzkAxF.webp';
  
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
