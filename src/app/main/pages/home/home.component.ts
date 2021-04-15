import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilmsService } from '../../../services/films/films.service';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title           : string  = '';
  noResults       : boolean = true;
  errorFeedback   : string  = 'Please, write title to search...';
  filmResults     : any[]   = [];
  userData        : any;
  userSessionData : any;
  indexUser       : any;

  constructor(
    private _spinner  : NgxSpinnerService,
    private _loginSvc : LoginService,
    private _filmSvc  : FilmsService
    ) { }

  ngOnInit(): void {
  }

  search(title: string) {
    if (title.trim() === '') return;

    this._spinner.show();
      this.title = title;
      this._filmSvc.getResults(title).subscribe(
        (films: any) => {
          setTimeout(() => {
            if (films.Response === 'True') {
              this.filmResults = films.Search;
              this.noResults = false;
              this._spinner.hide();
            } else if (films.Response === 'False' && films.Error === 'Movie not found!') {
              this.noResults = true;
              this.errorFeedback = films.Error;
              this.filmResults = [];
              this._spinner.hide();
            } else if (films.Response === 'False' && films.Error === 'Too many results.') {
              this.noResults = true;
              this.errorFeedback = films.Error;
              this.filmResults = [];
              this._spinner.hide();
            }
          }, 2000);
        },
        (error) => {
          this.noResults = true;
          this._spinner.hide();
        }
      )
  }

  setUserData = (): void => {
    this.userData = this._filmSvc.getUsers();
    this.userSessionData = this._filmSvc.getSessionUsers();
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
