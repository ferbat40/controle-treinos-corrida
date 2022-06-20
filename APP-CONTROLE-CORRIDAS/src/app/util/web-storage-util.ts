import { Corrida } from '../model/corrida';

export class WebStorageUtil {
  static get(key: string): any {
    console.log("chave "+key);
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

 
}
