import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {

  public user: string = "";

  constructor() {
    this.user = '';
  }

  public mesagemFonte = new BehaviorSubject(this.user);
  mesagemAtual = this.mesagemFonte.asObservable();

  alterarMensagem(user) {
    this.mesagemFonte.next(user);
  }
}
