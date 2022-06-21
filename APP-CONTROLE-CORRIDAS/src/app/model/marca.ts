

export class Marca {
  id : number =  Math.floor(Math.random()*1000);
  descricao: string;
  descsuplemento: string;
  
  constructor(descricao: string, suplemento: string) {
    this.descricao = descricao;
    this.descsuplemento=suplemento;
    
    
  }

  public static clone(marca: Marca) {
    let u: Marca = new Marca(marca.descricao,marca.descricao);
    u.descricao = marca.descricao;
    u.id=marca.id;
    u.descsuplemento=marca.descsuplemento;
    return u;
  }
}
