import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get checkSession() {
    return sessionStorage.getItem('userSession');
  }

}
