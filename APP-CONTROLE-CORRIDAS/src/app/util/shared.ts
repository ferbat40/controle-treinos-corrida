import { Constants } from './constants';
import { Corrida } from '../model/corrida';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new Corrida(Constants.USERNAME_KEY);

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.COSTS_KEY, String(0));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constants.DONATION_KEY);
    localStorage.setItem(Constants.DONATION_KEY, JSON.stringify([]));
  }
}
