import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login/login.service';
import { FilmsService } from '../../../services/films/films.service';


@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  filmDescription : any;
  userData        : any;
  userSessionData : any;
  indexUser       : any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _filmsSvc: FilmsService,
    private _loginSvc : LoginService,
    private _spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this._spinner.show();
    this._activatedRoute.params.subscribe(({ id }) => {
      console.log(id)
      this._filmsSvc.getFilmDescription(id).subscribe(film => {
        this.filmDescription = film;
        this._spinner.hide();
      })
    })
  }

  setUserData = (): void => {
    this.userData = this._filmsSvc.getUsers();
    this.userSessionData = this._filmsSvc.getSessionUsers();
    this.indexUser = this.userData.findIndex((element: any) => {
      if (element.username === this.userSessionData) return element.username;
    });
  }

  addFilmToFav = (id: string) => {
    this.setUserData();
    this.userData[this.indexUser].favourites.push(id);
    this._loginSvc.saveUser(this.userData);
  }

  removeFilmToFav = (id: string) => {
    this.setUserData();
    const filmIndex: any = this.userData[this.indexUser].favourites.indexOf(id);
    (this.userData[this.indexUser].favourites.includes(id)) ?
    this.userData[this.indexUser].favourites.splice(filmIndex, 1) :
    this.userData[this.indexUser].favourites.push(id);
    this._loginSvc.saveUser(this.userData);
  }

  checkFilmInFavourites = (id: string) => {
    this.setUserData();
    if (this.userData[this.indexUser].favourites.includes(id)) { return false }
    else { return true }
  }

}
