import { Constants } from './constants';
import { Corrida } from '../model/corrida';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.corrida) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new Corrida(Constants.corrida);

    localStorage.setItem(Constants.corrida, JSON.stringify(user));
    
  }
}
