import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  corrida!: Corrida[];
  constructor() {
    this.corrida = WebStorageUtil.get(Constants.corridas);
  }

  save(user: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.corridas);
    this.corrida.push(user);
    WebStorageUtil.set(Constants.corridas, this.corrida);
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
