import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show    : boolean = false;
  isLogged: boolean = false;



  constructor() { }

  ngOnInit(): void {

  }

  showMenu = () => {
    this.show = !this.show;
  }


}
