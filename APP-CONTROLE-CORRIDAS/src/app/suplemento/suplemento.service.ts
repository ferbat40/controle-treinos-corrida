import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Suplemento } from '../model/suplemento';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {RacePromiseService} from '../service/race-promise.service'



@Injectable({
  providedIn: 'root',
})
export class SuplementoService {
  suplemento!: Suplemento[];
  constructor(private racePromiseService: RacePromiseService) {
    this.suplemento = WebStorageUtil.get(Constants.corrid);
  }

  save(corrida: Suplemento) {
    this.suplemento = WebStorageUtil.get(Constants.corrid);
    this.suplemento.push(corrida);
    WebStorageUtil.set(Constants.corrid, this.suplemento);
   
  }

  saveJson(corrida: Suplemento){
    /*let p1= this.racePromiseService.saveRace(corrida);
    var p = Promise.resolve([p1]);
    p.then(function(v){
      console.log("Inclusão no db.json Efetuada com sucesso");
    }).catch((err) => { 
      console.log(err);
     
  });
  */

  }

  update(corrida: Suplemento) {
  
  this.suplemento = WebStorageUtil.get(Constants.corrid);
  this.delete(corrida.descricao);
  this.save(corrida);
    
    
    }

updateJson(corrida: Suplemento){

 /* let p1= this.racePromiseService.updateRace(corrida);
  var p = Promise.resolve([p1]);
  p.then(function(v){
    console.log("Alteração no db.json Efetuada com sucesso");
  }).catch((err) => { 
    console.log(err);
   
});
*/
}

  delete(corridas: string): boolean {
    this.suplemento = WebStorageUtil.get(Constants.corrid);
    this.suplemento = this.suplemento.filter((u) => {
    return u.descricao?.valueOf() != corridas?.valueOf();
    });


   
    WebStorageUtil.set(Constants.corrid, this.suplemento);
    return true;
  }

  deleteJson(corrida: Suplemento){
    /*let p1= this.racePromiseService.deleteRace(corrida);
    var p = Promise.resolve([p1]);
    p.then(function(v){
      console.log("Exclusão no db.json Efetuada com sucesso");
    }).catch((err) => { 
      console.log(err);
     
  });*/
  }

  isExist(value: string): boolean {
    this.suplemento = WebStorageUtil.get(Constants.corrid);
    for (let u of this.suplemento) {
      if (u.descricao?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): Suplemento[] {
    this.suplemento = WebStorageUtil.get(Constants.corrid);
    return this.suplemento;
  }
}
