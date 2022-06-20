

export class Marca {
  id : number =  Math.floor(Math.random()*1000);
  descricao: string;
  suplemento?: string;
  
  constructor(descricao: string) {
    this.descricao = descricao;
    
    
  }

  public static clone(marca: Marca) {
    let u: Marca = new Marca(marca.descricao);
    u.descricao = marca.descricao;
    u.id=marca.id;
    u.suplemento=marca.suplemento;
    return u;
  }
}
