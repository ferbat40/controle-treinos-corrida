import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Suplemento } from '../model/suplemento';
import { Marca } from '../model/marca';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {SuplementoObservable} from '../service/suplemento-observable';
import {MarcaObservable} from '../service/marca-observable';


@Injectable({
  providedIn: 'root',
})
export class SuplementoService {
  suplemento!: Suplemento[];
  marcas!: Marca[];
  constructor(private suplementoObservable: SuplementoObservable,
              private marcaObservable: MarcaObservable
    
    
    ) {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
  }

  save(corrida: Suplemento) {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
    if (this.suplemento===null || this.suplemento.length===undefined){
      this.suplemento = []
      this.suplemento.push(corrida);
    }else{ 
    this.suplemento.push(corrida);
    }
    WebStorageUtil.set(Constants.corridsupl, this.suplemento);
   
  }

  saveJson(corrida: Suplemento){
    this.suplementoObservable
    .save(corrida)
    .subscribe();

  }

  update(corrida: Suplemento) {
  
  this.suplemento = WebStorageUtil.get(Constants.corridsupl);
  this.delete(corrida.descricao);
  this.save(corrida);
    
    
    }

updateJson(corrida: Suplemento){

  this.suplementoObservable
  .update(corrida)
  .subscribe();


  }

getMarca(value : number){
  this.marcas = []
  this.marcaObservable
  .getById(value)
  .subscribe(marca => this.marcas.push(marca));
  console.log("aqui "+this.marcas.length);
  for (let u of this.marcas) {
console.log("aqui "+u.descricao);
  }
  
}

  delete(corridas: string): boolean {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
    this.suplemento = this.suplemento.filter((u) => {
    return u.descricao?.valueOf() != corridas?.valueOf();
    });


   
    WebStorageUtil.set(Constants.corridsupl, this.suplemento);
    return true;
  }

  deleteJson(corrida: Suplemento){
    this.suplementoObservable
  .delete(corrida)
  .subscribe();
  }

  isExist(value: string): boolean {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
    console.log(this.suplemento.length+" ois");
    if (this.suplemento===null || this.suplemento.length===undefined){
      
      return false;
    }
    for (let u of this.suplemento) {
      if (u.descricao?.valueOf() == value?.valueOf()) {
        return true;
      }
    
  }
    return false;
  }

  getUsers(): Suplemento[] {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
    return this.suplemento;
  }
}
