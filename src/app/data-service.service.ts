import { User } from './models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {

  public user = new User();

  constructor() {
    this.user.Name = '';
  }

  public mesagemFonte = new BehaviorSubject(this.user);
  mesagemAtual = this.mesagemFonte.asObservable();

  alterarMensagem(user: User) {
    this.mesagemFonte.next(user);
  }

}
