import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import {RacePromiseService} from '../service/race-promise.service'


@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  corrida!: Corrida[];
  constructor(private racePromiseService: RacePromiseService) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
  }

  save(user: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.corrida.push(user);
    WebStorageUtil.set(Constants.corridas, this.corrida);
    let p1= this.racePromiseService.saveRace(user);
    var p = Promise.resolve([p1]);
    p.then(function(v){
      console.log("po "+v[0]);
    });
  }

  update(corrida: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.delete(corrida.corridas);
    this.save(corrida);
  }

  delete(corridas: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.corrida = this.corrida.filter((u) => {
      return u.corridas?.valueOf() != corridas?.valueOf();
    });

    WebStorageUtil.set(Constants.corridas, this.corrida);
    return true;
  }

  isExist(value: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    for (let u of this.corrida) {
      if (u.corridas?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): Corrida[] {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    return this.corrida;
  }
}
