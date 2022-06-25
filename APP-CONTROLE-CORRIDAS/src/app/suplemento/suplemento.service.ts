import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Suplemento } from '../model/suplemento';
import { Marca } from '../model/marca';
import { Corrida } from '../model/corrida';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {SuplementoObservable} from '../service/suplemento-observable';
import {MarcaObservable} from '../service/marca-observable';
import { CorridaService } from '.././inclusao/corrida.service';


@Injectable({
  providedIn: 'root',
})
export class SuplementoService {
  suplemento!: Suplemento[];
  marcas!: Marca[];
  corrida! : Corrida[];
  constructor(private suplementoObservable: SuplementoObservable,
              private marcaObservable: MarcaObservable,
              private corridaService: CorridaService
    
    
    ) {
    this.suplemento = WebStorageUtil.get(Constants.corridsupl);
    this.marcas=[]
    this.corrida=[]
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
     corrida.descsupl=this.getMarca(corrida.marcaId);
   
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
corrida.descsupl=this.getMarca(corrida.marcaId);
  this.suplementoObservable
  .update(corrida)
  .subscribe();


  }

getMarca(value : number): any{
  
   this.marcas.fill
   this.marcaObservable.getById(value).subscribe(data=> this.marcas.push(data));
    for (let u of this.marcas) {
    if (u.id==value){
       return u.descricao;
    }

    }
    return "Falha ao buscar no db.json"
}

getCorrida(value : number): boolean{
  
 
  this.corrida=this.corridaService.getUsers();
  for (let u of this.corrida) {
    
    if (u.idSuplemento==value){
     return false;
   }
  }
  
 return true;
   
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
    if (this.suplemento===null || this.suplemento.length===undefined){
      this.suplemento = []
      //this.suplemento.push(corrida);
    } 

    return this.suplemento;
  }
}
