

export class Marca {
  id : number =  Math.floor(Math.random()*1000);
  descricao: string;
  
  constructor(descricao: string) {
    this.descricao = descricao;
    
    
  }

  public static clone(corrida: Marca) {
    let u: Marca = new Marca(corrida.descricao);
    u.descricao = corrida.descricao;
    u.id=corrida.id;
    return u;
  }
}
