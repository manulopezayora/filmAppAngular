import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilmsService } from 'src/app/services/films/films.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  title               : string  = '';
  noResults           : boolean = true;
  errorFeedback       : string  = 'Please, write title to search...';
  favouriteFilmsResult: any[]   = [];
  favouriteFilms      : any[]   = [];
  userData            : any;
  userSessionData     : any;
  indexUser           : any;

  constructor(
    private _spinner    : NgxSpinnerService,
    private _loginSvc   : LoginService,
    private _filmsSvc   : FilmsService
  ) { }

  ngOnInit(): void {
    this.getFavouriteFilms();
    this.setFavouriteFilms()
  }

  setFavouriteFilms = () => {
    this._spinner.show();
    this.favouriteFilmsResult.forEach(film => {
      this._filmsSvc.getFilmDescription(film).subscribe(filmData => {
        this.favouriteFilms.push(filmData);
        this._spinner.hide();
      }, error => {
        this._spinner.hide();
      })
    })
  }

  getFavouriteFilms = () => {
    this.setUserData();
    this.favouriteFilmsResult = this.userData[this.indexUser].favourites;
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
    this.setFavouriteFilms();
  }

  checkFilmInFavourites = (id: string) => {
    this.setUserData();
    if (this.userData[this.indexUser].favourites.includes(id)) { return false }
    else { return true }
  }

}
