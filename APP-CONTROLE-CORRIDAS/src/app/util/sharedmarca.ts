import { Constants } from './constants';
import { Marca } from '../model/marca';

export class SharedMarca {
  constructor() {}

  
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.corridasx) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new Marca(Constants.corridasx,"suple");

    localStorage.setItem(Constants.corridasx, JSON.stringify(user));
    
  }
}
