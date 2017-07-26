import { Injectable } from '@angular/core';

@Injectable()
export class AuthService 
{
  constructor() { }

  login():void
  {
    window.localStorage.setItem('token', '1234567890');
  }

  logout():void
  {
    window.localStorage.clear();
  }

  getToken()
  {
    return window.localStorage.getItem('token');
  }

}
