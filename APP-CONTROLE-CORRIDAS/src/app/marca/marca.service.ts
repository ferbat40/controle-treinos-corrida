import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Marca } from '../model/marca';
import { Suplemento } from '../model/suplemento';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {MarcaObservable} from '../service/marca-observable';
import {SuplementoObservable} from '../service/suplemento-observable';
import { SuplementoService } from '../suplemento/suplemento.service';



@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  marca!: Marca[];
  suplemento!: Suplemento[];
  constructor(private marcaObservable: MarcaObservable,
              private suplementoObservable: SuplementoObservable,
              private suplementoService : SuplementoService) {
    this.marca = WebStorageUtil.get(Constants.corridasx);
    this.suplemento = []
  }

  save(corrida: Marca) {
    this.marca = WebStorageUtil.get(Constants.corridasx);
    if (this.marca===null || this.marca.length===undefined){
      this.marca = [];
      this.marca.push(corrida);
    }else{
    this.marca.push(corrida);
    }
    WebStorageUtil.set(Constants.corridasx, this.marca);
   
  }

  

  saveJson(corrida: Marca){
   
  this.marcaObservable
  .save(corrida)
  .subscribe();
  }

  update(corrida: Marca) {
  
  this.marca = WebStorageUtil.get(Constants.corridasx);
  this.delete(corrida.descricao);
  this.save(corrida);
    
    
    }

updateJson(corrida: Marca){
  this.marcaObservable
  .update(corrida)
  .subscribe();
  
  
 
}


getSuplemento(value : number): boolean{
  
 
  this.suplemento=this.suplementoService.getUsers();
  for (let u of this.suplemento) {
    
    if (u.marcaId==value){
     return false;
   }
  }
  
 return true;
   
}


  delete(corridas: string): boolean {
    this.marca = WebStorageUtil.get(Constants.corridasx);
    this.marca = this.marca.filter((u) => {
    return u.descricao?.valueOf() != corridas?.valueOf();
    });


   
    WebStorageUtil.set(Constants.corridasx, this.marca);
    return true;
  }

  deleteJson(corrida: Marca){
    this.marcaObservable
  .delete(corrida)
  .subscribe();
  }

  isExist(value: string): boolean {
    this.marca = WebStorageUtil.get(Constants.corridasx);
    if (this.marca===null || this.marca.length===undefined){
      return false;
    }
    for (let u of this.marca) {
      if (u.descricao?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): Marca[] {
    this.marca = WebStorageUtil.get(Constants.corridasx);
    return this.marca;
  }
}
