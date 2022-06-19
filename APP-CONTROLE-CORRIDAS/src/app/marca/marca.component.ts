import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Marca } from '../model/marca';
import { MarcaService } from './marca.service';
import { SharedMarca } from './../util/sharedmarca';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  corrida!: Marca;
  corridas?: Marca[];

  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    SharedMarca.initializeWebStorage();
    this.corrida = new Marca('');
    this.corridas = this.marcaService.getUsers();
  }

  onSubmit() {
    
    this.isSubmitted = true;
     if (!this.marcaService.isExist(this.corrida.descricao)) {
      this.marcaService.saveJson(this.corrida);
      this.marcaService.save(this.corrida);
      
      
    
    } else {
      this.marcaService.updateJson(this.corrida);
      this.marcaService.update(this.corrida);
     
    }
  
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.corrida = new Marca('');
    this.corridas= this.marcaService.getUsers();
    
  }

 
  onEdit(corrida: Marca) {
    let clone = Marca.clone(corrida);
    this.corrida= clone;
  }

  onDelete(username: string,corrida: Marca) {
    let confirmation = window.confirm(
      'Deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    this.marcaService.deleteJson(corrida);
    let response: boolean = this.marcaService.delete(username);
   
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Esse item não pode ser removido!';
    }
    this.corridas = this.marcaService.getUsers();
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




