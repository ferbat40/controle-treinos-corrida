import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Corrida } from '../model/corrida';
import { Shared } from './../util/shared';
import { UserService } from './user.service';
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

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.corrida = new Corrida('');
    this.corridas = this.userService.getUsers();
  }

  onSubmit() {
    
    this.isSubmitted = true;
     if (!this.userService.isExist(this.corrida.corridas)) {
      this.userService.save(this.corrida);
    
    } else {
      this.userService.update(this.corrida);
   
    }
  
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.corrida = new Corrida('');
    this.corridas= this.userService.getUsers();
    
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param user
   */
  onEdit(corrida: Corrida) {
    //this.user = user;
    let clone = Corrida.clone(corrida);
    this.corrida= clone;
  }

  onDelete(username: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.userService.delete(username);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.corridas = this.userService.getUsers();
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



