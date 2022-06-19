import { ConstantsMarca } from './constantsmarca';
import { Marca } from '../model/marca';

export class SharedMarca {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(ConstantsMarca.corrida) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new Marca(ConstantsMarca.corrida);

    localStorage.setItem(ConstantsMarca.corrida, JSON.stringify(user));
    
  }
}
