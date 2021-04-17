import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show    : boolean = false;
  isLogged: boolean = false;



  constructor(
    private _router   : Router,
    private _loginSvc : LoginService
  ) { }

  ngOnInit(): void {

  }

  showMenu = () => {
    this.show = !this.show;
  }

  logout = () => {
    this._loginSvc.removeSession();
    this._router.navigate(['login'])
  }


}
