

export class User {
  name?: string;
  username: string;
  password: string;
  cpf?: string;
  birthday?: Date;
  balance: number;
  isAdmin: boolean;
  
  constructor(username: string, password: string, isAdmin: boolean = false) {
    this.username = username;
    this.password = password;
    this.balance = 0;
   
    this.isAdmin = isAdmin;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.balance = user.balance;
   
    return u;
  }
}
