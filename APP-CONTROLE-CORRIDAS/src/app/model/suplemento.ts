

export class Suplemento {
  id : number =  Math.floor(Math.random()*1000);
  descricao: string;
  marcaId!: number;
  descsupl!: string;
  
  constructor(descricao: string) {
    this.descricao = descricao;
    
    
  }

  public static clone(suplemento: Suplemento) {
    let u: Suplemento = new Suplemento(suplemento.descricao);
    u.descricao = suplemento.descricao;
    u.id=suplemento.id;
    u.marcaId=suplemento.marcaId;
    u.descsupl=suplemento.descsupl;
    return u;
  }
}
