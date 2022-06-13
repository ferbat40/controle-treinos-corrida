import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';
import { Shared } from './../util/shared';
import { CorridaService } from './corrida.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';


@Component({
  selector: 'app-inclusao',
  templateUrl: './inclusao.component.html',
  styleUrls: ['./inclusao.component.scss']
})
export class InclusaoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  corrida!: Corrida;
  corridas?: Corrida[];

  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private corridaService: CorridaService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.corrida = new Corrida('');
    this.corridas = this.corridaService.getUsers();
  }

  onSubmit() {
    
    this.isSubmitted = true;
     if (!this.corridaService.isExist(this.corrida.corridas)) {
      this.corridaService.saveJson(this.corrida);
      this.corridaService.save(this.corrida);
      
      
    
    } else {
      this.corridaService.updateJson(this.corrida);
      this.corridaService.update(this.corrida);
     
    }
  
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.corrida = new Corrida('');
    this.corridas= this.corridaService.getUsers();
    
  }

 
  onEdit(corrida: Corrida) {
    let clone = Corrida.clone(corrida);
    this.corrida= clone;
  }

  onDelete(username: string,corrida: Corrida) {
    let confirmation = window.confirm(
      'Deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    this.corridaService.deleteJson(corrida);
    let response: boolean = this.corridaService.delete(username);
   
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Esse item não pode ser removido!';
    }
    this.corridas = this.corridaService.getUsers();
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



