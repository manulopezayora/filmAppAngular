import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: "manuel",
    password: "1234"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
