

export class Marca {
  id : number =  Math.floor(Math.random()*1000);
  descricao: string;
  descmarca: string;
  
  constructor(descricao: string, descmarca: string) {
    this.descricao = descricao;
    this.descmarca=descmarca;
    
    
  }

  public static clone(marca: Marca) {
    let u: Marca = new Marca(marca.descricao,marca.descricao);
    u.descricao = marca.descricao;
    u.id=marca.id;
    u.descmarca=marca.descmarca;
    
    return u;
  }
}
