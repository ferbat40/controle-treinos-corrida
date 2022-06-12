

export class Corrida {
  id ?: number;
  local ?: string;
  distancia?: string;
  dificuldade?: string;
  dataCorrida?: Date;
  corridas: string;
  
  constructor(corridas: string) {
    this.corridas = corridas;
   
    
  }

  public static clone(corrida: Corrida) {
    let u: Corrida = new Corrida(corrida.corridas);
    u.local = corrida.local;
    u.distancia = corrida.distancia;
    u.dificuldade = corrida.dificuldade;
    u.dataCorrida = corrida.dataCorrida;
    u.corridas = corrida.corridas;
   
    return u;
  }
}
