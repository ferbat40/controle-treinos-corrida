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
  marca!: Marca;
  marcas?: Marca[];

  

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
   SharedMarca.initializeWebStorage();
   this.marca = new Marca('', '');
   this.marcas = JSON.parse(localStorage.getItem('marcas33')!);
  }

  onSubmit() {
    
    this.isSubmitted = true;
     if (!this.marcaService.isExist(this.marca.descricao)) {
      this.marcaService.saveJson(this.marca);
      this.marcaService.save(this.marca);
      
      
    
    } else {
      this.marcaService.updateJson(this.marca);
      this.marcaService.update(this.marca);
      
    }
  
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.marca = new Marca('','');
    this.marcas= this.marcaService.getUsers();
    
  }

 
  onEdit(corrida: Marca) {
    if (this.marcaService.getSuplemento(this.marca.id)===true){
      
    let clone = Marca.clone(corrida);
    this.marca= clone;
     } else{
      alert("Existem Registro(s) cadastrados com essa marca,  alteração impossivel");
    }
  }

  onDelete(username: string,corrida: Marca) {
    if (this.marcaService.getSuplemento(corrida.id)===true){
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
    this.marcas = this.marcaService.getUsers();
  }else{
    alert("Existem Registro(s) cadastrados com essa marca,  exclusão impossivel");
  
  }
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




