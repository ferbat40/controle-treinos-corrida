

export class Corrida {
  id : number =  Math.floor(Math.random()*1000);
  local ?: string;
  distancia?: string;
  dificuldade?: string;
  dataCorrida?: Date;
  corridas: string;
  idSuplemento!: number;
  descsupl!: string;
  
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
    u.id=corrida.id;
    u.idSuplemento=corrida.idSuplemento;
    u.descsupl=corrida.descsupl;
    return u;
  }
}
