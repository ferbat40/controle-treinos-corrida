

export class Corrida {
  local ?: string;
  distancia?: string;
  dificuldade?: string;
  dataCorrida: Date;
  
  
  constructor(dataCorrida: Date) {
    this.dataCorrida = dataCorrida;
   
    
  }

  public static clone(corrida: Corrida) {
    let u: Corrida = new Corrida(corrida.dataCorrida);
    u.local = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.balance = user.balance;
   
    return u;
  }
}
