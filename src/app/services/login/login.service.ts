import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersData: any = [];

  constructor() { }

  getUsersData = () => {
    const data: any = localStorage.getItem('user');
    this.usersData = JSON.parse(data);
    return this.usersData;
  }

  setTokenSession = (sessionUser: string): void => {
    sessionStorage.setItem('userSession', sessionUser);
  }

  checkSession = () => {
    sessionStorage.getItem('userSession') === null ?
    false :
    true;
  }

  saveUser = ( newUser: any): void => {
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  removeSession = () => {
    sessionStorage.removeItem('userSession');
  }
}
