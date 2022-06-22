import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Suplemento } from '../model/suplemento';
import { SuplementoService } from './suplemento.service';
import { SharedSuplemento } from './../util/sharedsuplemento';

@Component({
  selector: 'app-suplemento',
  templateUrl: './suplemento.component.html',
  styleUrls: ['./suplemento.component.scss']
})
export class SuplementoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  suplemento!: Suplemento;
  suplementos?: Suplemento[];

  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private suplementoService: SuplementoService) {}

  ngOnInit(): void {
    SharedSuplemento.initializeWebStorage();
    this.suplemento = new Suplemento('');
    this.suplementos = this.suplementoService.getUsers();
  }

  onSubmit() {
    
    this.isSubmitted = true;
     if (!this.suplementoService.isExist(this.suplemento.descricao)) {
      this.suplementoService.saveJson(this.suplemento);
      this.suplementoService.save(this.suplemento);
      
      
    
    } else {
      this.suplementoService.updateJson(this.suplemento);
      this.suplementoService.update(this.suplemento);
      //this.suplementoService.getMarca(this.suplemento.marcaId);
      
    }
  
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.suplemento = new Suplemento('');
    this.suplementos= this.suplementoService.getUsers();
    
  }

 
  onEdit(corrida: Suplemento) {
    let clone = Suplemento.clone(corrida);
    this.suplemento= clone;
  }

  onDelete(username: string,corrida: Suplemento) {
    let confirmation = window.confirm(
      'Deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    this.suplementoService.deleteJson(corrida);
    let response: boolean = this.suplementoService.delete(username);
   
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Esse item não pode ser removido!';
    }
    this.suplementos = this.suplementoService.getUsers();
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
