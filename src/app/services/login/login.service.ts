import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data: any = {
    username: "manuel",
    password: "1234"
  }

  constructor() { }
}
