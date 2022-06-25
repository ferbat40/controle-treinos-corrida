import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { Suplemento } from '../model/suplemento';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {RacePromiseService} from '../service/race-promise.service'



@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  corrida!: Corrida[];
  suplemento!: Suplemento[];
  constructor(private racePromiseService: RacePromiseService) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.suplemento = [];
  }

  save(corrida: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    if (this.corrida===null || this.corrida.length===undefined){
      this.corrida = []
      this.corrida.push(corrida);
    }else{
    this.corrida.push(corrida);
    }
    WebStorageUtil.set(Constants.corridas, this.corrida);
   
  }

  saveJson(corrida: Corrida){
    corrida.descsupl=this.getSuplemento(corrida.idSuplemento);
    let p1= this.racePromiseService.saveRace(corrida);
    var p = Promise.resolve([p1]);
    p.then(function(v){
      console.log("Inclusão no db.json Efetuada com sucesso");
    }).catch((err) => { 
      console.log(err);
     
  });
  

  }

  update(corrida: Corrida) {
  
  this.corrida = WebStorageUtil.get(Constants.corridas);
  this.delete(corrida.corridas);
  this.save(corrida);
    
    
    }

updateJson(corrida: Corrida){
  corrida.descsupl=this.getSuplemento(corrida.idSuplemento);
  let p1= this.racePromiseService.updateRace(corrida);
  var p = Promise.resolve([p1]);
  p.then(function(v){
    console.log("Alteração no db.json Efetuada com sucesso");
  }).catch((err) => { 
    console.log(err);
   
});

}


getSuplemento(value : number): any{
  
  this.suplemento.fill
  this.racePromiseService.getById(value).subscribe(data=> this.suplemento.push(data));
   for (let u of this.suplemento) {
   
    if (u.id==value){
      return u.descricao;
   }

   }
   return "Falha ao buscar no db.json"
}


  delete(corridas: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.corrida = this.corrida.filter((u) => {
    return u.corridas?.valueOf() != corridas?.valueOf();
    });


   
    WebStorageUtil.set(Constants.corridas, this.corrida);
    return true;
  }

  deleteJson(corrida: Corrida){
    let p1= this.racePromiseService.deleteRace(corrida);
    var p = Promise.resolve([p1]);
    p.then(function(v){
      console.log("Exclusão no db.json Efetuada com sucesso");
    }).catch((err) => { 
      console.log(err);
     
  });
  }

  isExist(value: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    if (this.corrida===null || this.corrida.length===undefined){
      return false;
    }else{
    for (let u of this.corrida) {
      if (u.corridas?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
  }
    return false;
  }

  getUsers(): Corrida[] {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    if (this.corrida===null || this.corrida.length===undefined){
      this.corrida = []
     
    } 
    
    return this.corrida;
  }
}
