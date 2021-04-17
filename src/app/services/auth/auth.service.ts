import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // get isLoggedIn(): boolean {
  //   return Object.keys(JSON.parse(sessionStorage.getItem('userSession') || '{}')).length > 0;
  //   return Object.keys(JSON.parse(sessionStorage.getItem('userSession') || '{}')).length > 0;
  // }

  get checkSession() {
    if (sessionStorage.getItem('userSession') === null) {
      return false
    } else {
      return true
    }
  }

}
