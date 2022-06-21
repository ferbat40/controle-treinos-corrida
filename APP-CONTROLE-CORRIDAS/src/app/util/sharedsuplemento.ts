import { Constants } from './constants';
import { Suplemento } from '../model/suplemento';

export class SharedSuplemento {
  constructor() {}

  
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.corridsupl) != null) {
      return;
    }

   
    let user = new Suplemento(Constants.corridsupl);

    localStorage.setItem(Constants.corridsupl, JSON.stringify(user));
    
  }
}
