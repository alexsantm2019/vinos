import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserStoreService {

  private _token: any = null;
  constructor() {}

  set token(token: string) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    //Verifico token ingresado desde Interceptor
    let token = localStorage.getItem('wine-token');
    if (token != null) {
      this.token = token;
    }
    return this.token != null;
  }
}
