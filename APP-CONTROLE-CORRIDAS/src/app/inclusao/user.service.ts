import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Corrida } from '../model/corrida';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  corrida!: Corrida[];
  constructor() {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
  }

  save(user: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
    this.corrida.push(user);
    WebStorageUtil.set(Constants.USERS_KEY, this.corrida);
  }

  update(corrida: Corrida) {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
    this.delete(corrida.corridas);
    this.save(corrida);
  }

  delete(corridas: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
    this.corrida = this.corrida.filter((u) => {
      return u.corridas?.valueOf() != corridas?.valueOf();
    });

    WebStorageUtil.set(Constants.USERS_KEY, this.corrida);
    return true;
  }

  isExist(value: string): boolean {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
    for (let u of this.corrida) {
      if (u.corridas?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): Corrida[] {
    this.corrida = WebStorageUtil.get(Constants.USERS_KEY);
    return this.corrida;
  }
}
