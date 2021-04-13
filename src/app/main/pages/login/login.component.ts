import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
    favourites: [[]]
  });

  newUser  : any     = [];
  usersData: any     = [];
  isLogged : boolean = false;


  constructor(
    private _formBuilder : FormBuilder,
    private _router      : Router,
    private _loginService: LoginService
    ) { }

    ngOnInit(): void {
      this.checkSession();
      this.usersData = this._loginService.getUsersData();

    }

  onSubmit = (): void => {
    this.newUser = this.loginForm.value;

    if(this._loginService.getUsersData() === null){
      this._loginService.setTokenSession(this.loginForm.get('username')?.value)
      this._loginService.saveUser([this.newUser]);
    } else {
      const data: any = this._loginService.getUsersData();
      const username = data.findIndex((user: any) => user.username === this.loginForm.get('username')?.value)
      const password = data.findIndex((user: any) => user.password === this.loginForm.get('password')?.value)
      if (username !== -1 && password !== -1) {
        this._loginService.setTokenSession(this.loginForm.get('username')?.value);
        this._router.navigate(['home']);
      } else {
        this._loginService.setTokenSession(this.loginForm.get('username')?.value);
        this.usersData.push(this.newUser);
        this._loginService.saveUser(this.usersData);
        this._router.navigate(['home']);
      }
    }
  }

  fieldIsValid = (name: string): boolean => {
    const fieldName: any = this.loginForm.get(name);
    return (fieldName.invalid && fieldName.touched);
  }

  labelAnimation = (name: string): boolean => {
    const fieldName: any = this.loginForm.get(name);
    return (!fieldName.pristine && fieldName.value);
  }

  checkSession = () => {
    sessionStorage.getItem('userSession') === null ?
    this.isLogged = false :
    this.isLogged = true;

    this.isLogged === true && this._router.navigate(['home'])
  }

}
