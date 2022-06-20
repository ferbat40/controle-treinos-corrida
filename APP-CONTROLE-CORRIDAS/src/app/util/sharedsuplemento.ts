import { Constants } from './constants';
import { Suplemento } from '../model/suplemento';

export class SharedSuplemento {
  constructor() {}

  
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.corrid) != null) {
      return;
    }

   
    let user = new Suplemento(Constants.corrid);

    localStorage.setItem(Constants.corrid, JSON.stringify(user));
    
  }
}
