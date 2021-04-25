(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/manuel/FCT-Everis__/Pruebas/filmAppAngular/src/main.ts */"zUnb");


/***/ }),

/***/ "1x9+":
/*!***************************************************************!*\
  !*** ./src/app/main/pages/favourites/favourites.component.ts ***!
  \***************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "XXEo");
/* harmony import */ var src_app_services_films_films_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/films/films.service */ "uRFS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function FavouritesComponent_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", film_r1.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", film_r1.Title);
} }
function FavouritesComponent_div_3_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Poster not found! :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouritesComponent_div_3_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesComponent_div_3_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addFilmToFav(film_r1.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouritesComponent_div_3_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouritesComponent_div_3_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeFilmToFav(film_r1.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function FavouritesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouritesComponent_div_3_img_3_Template, 1, 2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavouritesComponent_div_3_h3_4_Template, 2, 0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FavouritesComponent_div_3_a_8_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FavouritesComponent_div_3_a_9_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](film_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", film_r1.Poster !== "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", film_r1.Poster === "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, film_r1.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkFilmInFavourites(film_r1.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkFilmInFavourites(film_r1.imdbID));
} }
class FavouritesComponent {
    constructor(_spinner, _loginSvc, _filmsSvc) {
        this._spinner = _spinner;
        this._loginSvc = _loginSvc;
        this._filmsSvc = _filmsSvc;
        this.title = '';
        this.noResults = true;
        this.errorFeedback = 'Please, write title to search...';
        this.favouriteFilmsResult = [];
        this.favouriteFilms = [];
        this.setFavouriteFilms = () => {
            this._spinner.show();
            this.getFavouriteFilms();
            this.favouriteFilmsResult.forEach(film => {
                this._filmsSvc.getFilmDescription(film).subscribe(filmData => {
                    this.favouriteFilms.push(filmData);
                    this._spinner.hide();
                }, error => {
                    this._spinner.hide();
                });
            });
        };
        this.getFavouriteFilms = () => {
            this.setUserData();
            this.favouriteFilmsResult = this.userData[this.indexUser].favourites;
        };
        this.setUserData = () => {
            this.userData = this._filmsSvc.getUsers();
            this.userSessionData = this._filmsSvc.getSessionUsers();
            this.indexUser = this.userData.findIndex((element) => {
                if (element.username === this.userSessionData)
                    return element.username;
            });
        };
        this.addFilmToFav = (id) => {
            this.setUserData();
            this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
        };
        this.removeFilmToFav = (id) => {
            this.setUserData();
            const filmIndex = this.userData[this.indexUser].favourites.indexOf(id);
            (this.userData[this.indexUser].favourites.includes(id)) ?
                this.userData[this.indexUser].favourites.splice(filmIndex, 1) :
                this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
            this.favouriteFilms = [];
            this.setFavouriteFilms();
        };
        this.checkFilmInFavourites = (id) => {
            this.setUserData();
            if (this.userData[this.indexUser].favourites.includes(id)) {
                return false;
            }
            else {
                return true;
            }
        };
    }
    ngOnInit() {
        this.setFavouriteFilms();
    }
}
FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_films_films_service__WEBPACK_IMPORTED_MODULE_3__["FilmsService"])); };
FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavouritesComponent, selectors: [["app-favourites"]], decls: 4, vars: 1, consts: [[1, "favourite-title"], [1, "film-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card__title"], ["class", "card__poster", 3, "src", "alt", 4, "ngIf"], ["class", "poster", 4, "ngIf"], [1, "card__buttons"], [1, "card__buttons-link", 3, "routerLink"], ["class", "card__buttons-link button--add", 3, "click", 4, "ngIf"], ["class", "card__buttons-link button--remove", 3, "click", 4, "ngIf"], [1, "card__poster", 3, "src", "alt"], [1, "poster"], [1, "card__buttons-link", "button--add", 3, "click"], [1, "card__buttons-link", "button--remove", 3, "click"]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your favourite Film list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouritesComponent_div_3_Template, 10, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favouriteFilms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".favourite-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.film-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  \n  margin-bottom: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 300px;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  width: 80%;\n  height: 60px;\n  font-size: 1.2rem;\n  overflow: hidden;\n}\n\n.card__poster[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.poster[_ngcontent-%COMP%] {\n  padding: 2rem .4rem;\n  border: 1px solid black;\n}\n\n.card__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  padding: 1rem .2rem;\n}\n\n.card__buttons-link[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: black;\n  padding: .5rem 1.2rem;\n  text-decoration: none;\n}\n\n.button--add[_ngcontent-%COMP%] {\n  background-color: #102e64;\n}\n\n.button--remove[_ngcontent-%COMP%] {\n  background-color: #a71717;\n}\n\n\n\n@media all and (min-width: 768px) {\n  .film-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 300px);\n    column-gap: 1.5rem;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n\n\n@media all and (min-width:1200px){\n  .film-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 300px);\n  }\n\n  .card__buttons-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n}\n\n\n\n@media all and (min-width:1650px){\n  .film-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 300px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0EsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLFlBQVk7O0FBQ1o7RUFDRTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRiIsImZpbGUiOiJmYXZvdXJpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3VyaXRlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5maWxtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLyogUGFyYSBzYWx2YXIgZWwgZm9vdGVyICovXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmRfX3Bvc3RlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnBvc3RlciB7XG4gIHBhZGRpbmc6IDJyZW0gLjRyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2FyZF9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAuMnJlbTtcbn1cblxuLmNhcmRfX2J1dHRvbnMtbGluayB7XG4gIGNvbG9yOiAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogLjVyZW0gMS4ycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXR0b24tLWFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDJlNjQ7XG59XG5cbi5idXR0b24tLXJlbW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzE3MTc7XG59XG5cblxuLyogVGFibGV0ICovXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmlsbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzAwcHgpO1xuICAgIGNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcbiAgLmZpbG0tY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XG4gIH1cblxuICAuY2FyZF9fYnV0dG9ucy1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLyogRGVza3RvcCAqL1xuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxNjUwcHgpe1xuICAuZmlsbS1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDMwMHB4KTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "8wAG":
/*!************************************************************************!*\
  !*** ./src/app/main/components/search-input/search-input.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchInputComponent {
    constructor() {
        this.onEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = '';
    }
    ngOnInit() {
    }
    search() {
        this.onEnter.emit(this.title);
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], outputs: { onEnter: "onEnter" }, decls: 6, vars: 1, consts: [[1, "search-box"], ["autocomplete", "off", 1, "search-box__field", 3, "ngSubmit"], ["type", "text", "name", "title", "placeholder", "Search title ...", 1, "search-box__input", 3, "ngModel", "ngModelChange"], [1, "submit-button"], [1, "material-icons", "search-button"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchInputComponent_Template_form_ngSubmit_1_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_2_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".search-box__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.search-box__input[_ngcontent-%COMP%] {\n  height: 40px;\n  font-size: 1rem;\n  padding: .4rem;\n  outline: none;\n  border: 2px solid black;\n  border-right: none;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: transparent;\n  border: 2px solid black;\n  border-left: none;\n  outline: none;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzZWFyY2gtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNlYXJjaC1ib3hfX2ZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnNlYXJjaC1ib3hfX2lucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IC40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "9+8r":
/*!****************************************************!*\
  !*** ./src/app/shared/guards/check-login.guard.ts ***!
  \****************************************************/
/*! exports provided: CheckLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLoginGuard", function() { return CheckLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CheckLoginGuard {
    constructor(_authSvc, _router) {
        this._authSvc = _authSvc;
        this._router = _router;
    }
    canActivate(route, state) {
        if (!this._authSvc.checkSession) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
CheckLoginGuard.ɵfac = function CheckLoginGuard_Factory(t) { return new (t || CheckLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CheckLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckLoginGuard, factory: CheckLoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    get checkSession() {
        return sessionStorage.getItem('userSession');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login/login.service */ "XXEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "menu__bar--active": a0 }; };
const _c1 = function (a0) { return { "menu__list--active": a0 }; };
class NavbarComponent {
    constructor(_router, _loginSvc) {
        this._router = _router;
        this._loginSvc = _loginSvc;
        this.show = false;
        this.isLogged = false;
        this.showMenu = () => {
            this.show = !this.show;
        };
        this.logout = () => {
            this._loginSvc.removeSession();
            this._router.navigate(['login']);
        };
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 12, consts: [[1, "menu"], [1, "logo"], [1, "menu__box-button", 3, "click"], [1, "menu__bar", 3, "ngClass"], [1, "menu__list", 3, "ngClass"], ["routerLink", "home", 1, "menu__list-item", 3, "click"], ["routerLink", "favourites", 1, "menu__list-item", 3, "click"], ["routerLink", "logout", 1, "menu__list-item", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FilmApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_8_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_12_listener() { return ctx.showMenu(); })("click", function NavbarComponent_Template_li_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.show));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".menu[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(to left, #515151, #000);\n  color: #eee;\n  z-index: 20;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Anton', sans-serif;\n  z-index: 30;\n}\n\n.menu__box-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 20px;\n  z-index: 40;\n}\n\n.menu__bar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 3px;\n  background-color: #eee;\n  position: relative;\n  z-index: 50;\n  transition: transform .8s;\n}\n\n.menu__bar[_ngcontent-%COMP%]:first-child {\n  width: 30px;\n  height: 3px;\n  background-color: #eee;\n  position: relative;\n  top: -5px;\n}\n\n.menu__bar[_ngcontent-%COMP%]:last-child {\n  width: 30px;\n  height: 3px;\n  background-color: #eee;\n  position: relative;\n  bottom: -5px;\n\n}\n\n.menu__bar--active[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.menu__bar--active[_ngcontent-%COMP%]:first-child {\n  top: 3px;\n  transform: rotate(225deg);\n}\n\n.menu__bar--active[_ngcontent-%COMP%]:last-child {\n  bottom: 3px;\n  transform: rotate(-225deg);\n}\n\n.menu__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  list-style-type: none;\n  font-family: 'Open Sans', sans-serif;\n  background: linear-gradient(to left, #515151, #000);\n  position: absolute;\n  top: -200px;\n  left: 0;\n  transition: .8s;\n  z-index: 10;\n}\n\n.menu__list--active[_ngcontent-%COMP%] {\n  top: 68px;\n  left: 0;\n}\n\n.menu__list-item[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 1.2rem 0;\n  outline: none;\n}\n\n\n\n@media all and (min-width: 768px) {\n\n  .menu[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .menu__box-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu__list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    list-style-type: none;\n    position: relative;\n    top: 0;\n  }\n\n  .menu__list-item[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    padding: 0 0 0 2rem;\n  }\n}\n\n\n\n@media all and (min-width:1200px){\n\n  .menu[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 1rem 3rem;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .menu__list-item[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    padding: 0 3rem 0 5rem;\n    cursor: pointer;\n    transition: .5s;\n  }\n\n  .menu__list-item[_ngcontent-%COMP%]:hover {\n    color: #757575;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbURBQW1EO0VBQ25ELFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG1EQUFtRDtFQUNuRCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBLFdBQVc7O0FBQ1g7O0VBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxZQUFZOztBQUNaOztFQUVFO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTE1MTUxLCAjMDAwKTtcbiAgY29sb3I6ICNlZWU7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XG4gIHotaW5kZXg6IDMwO1xufVxuXG4ubWVudV9fYm94LWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA0MDtcbn1cblxuLm1lbnVfX2JhciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cztcbn1cblxuLm1lbnVfX2JhcjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbi5tZW51X19iYXI6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01cHg7XG5cbn1cblxuLm1lbnVfX2Jhci0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tZW51X19iYXItLWFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gIHRvcDogM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4ubWVudV9fYmFyLS1hY3RpdmU6bGFzdC1jaGlsZCB7XG4gIGJvdHRvbTogM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbn1cblxuLm1lbnVfX2xpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTE1MTUxLCAjMDAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMDBweDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogLjhzO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm1lbnVfX2xpc3QtLWFjdGl2ZSB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogMDtcbn1cblxuLm1lbnVfX2xpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogVGFibGV0ICovXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZW51IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLm1lbnVfX2JveC1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAubWVudV9fbGlzdC1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBwYWRkaW5nOiAwIDAgMCAycmVtO1xuICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcblxuICAubWVudSB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAubWVudV9fbGlzdC1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAwIDNyZW0gMCA1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gIH1cblxuICAubWVudV9fbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "EtQq");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");





class AppComponent {
    constructor() {
        this.title = 'filmAppAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "pacman"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XXEo":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginService {
    constructor() {
        this.usersData = [];
        this.getUsersData = () => {
            const data = localStorage.getItem('user');
            this.usersData = JSON.parse(data);
            return this.usersData;
        };
        this.setTokenSession = (sessionUser) => {
            sessionStorage.setItem('userSession', sessionUser);
        };
        this.checkSession = () => {
            sessionStorage.getItem('userSession') === null ?
                false :
                true;
        };
        this.saveUser = (newUser) => {
            localStorage.setItem('user', JSON.stringify(newUser));
        };
        this.removeSession = () => {
            sessionStorage.removeItem('userSession');
        };
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "xHn+");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "lJ4n");
/* harmony import */ var _pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/favourites/favourites.component */ "1x9+");
/* harmony import */ var _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-input/search-input.component */ "8wAG");
/* harmony import */ var _pages_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/movie-description/movie-description.component */ "sSRS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__["FavouritesComponent"],
        _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
        _pages_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_7__["MovieDescriptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/check-login.guard */ "9+8r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_8__["CheckLoginGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"]] }); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "footer"], [1, "footer__link"], [1, "footer__link-text"], ["href", "https://manulopezayora.github.io/", "target", "_blank", "rel", "noopener noreferrer", 1, "footer__link-item"], [1, "footer__copy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Visit my website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ManuLopezAyora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manu Lopez Ayora 2021 \u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  font-family: 'Open Sans', sans-serif;\n  text-align: center;\n  background: linear-gradient(to left, #515151, #000);\n  color: #eee;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: .5rem;\n}\n\n.footer__link-text[_ngcontent-%COMP%] {\n  font-size: .8rem;\n}\n\n.footer__link-item[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.footer__copy[_ngcontent-%COMP%] {\n  font-size: .8rem;\n}\n\n\n\n@media all and (min-width: 768px) {\n  .footer__link-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .footer__copy[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n\n\n@media all and (min-width:1200px){\n  .footer__link-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixtREFBbUQ7RUFDbkQsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUlBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzUxNTE1MSwgIzAwMCk7XG4gIGNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC41cmVtO1xufVxuXG4uZm9vdGVyX19saW5rLXRleHQge1xuICBmb250LXNpemU6IC44cmVtO1xufVxuXG4uZm9vdGVyX19saW5rLWl0ZW0ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmZvb3Rlcl9fY29weSB7XG4gIGZvbnQtc2l6ZTogLjhyZW07XG59XG5cblxuXG4vKiBUYWJsZXQgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXJfX2xpbmstdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmZvb3Rlcl9fY29weSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcbiAgLmZvb3Rlcl9fbGluay1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "lJ4n":
/*!***************************************************!*\
  !*** ./src/app/main/pages/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login/login.service */ "XXEo");
/* harmony import */ var _services_films_films_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/films/films.service */ "uRFS");
/* harmony import */ var _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-input/search-input.component */ "8wAG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function HomeComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorFeedback);
} }
function HomeComponent_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const film_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", film_r2.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", film_r2.Title);
} }
function HomeComponent_div_3_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Poster not found! :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const film_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addFilmToFav(film_r2.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const film_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.removeFilmToFav(film_r2.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_img_3_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_3_h3_4_Template, 2, 0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_3_a_8_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_3_a_9_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](film_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", film_r2.Poster !== "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", film_r2.Poster === "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, film_r2.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checkFilmInFavourites(film_r2.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.checkFilmInFavourites(film_r2.imdbID));
} }
class HomeComponent {
    constructor(_spinner, _loginSvc, _filmsSvc) {
        this._spinner = _spinner;
        this._loginSvc = _loginSvc;
        this._filmsSvc = _filmsSvc;
        this.title = '';
        this.noResults = true;
        this.errorFeedback = 'Please, write title to search...';
        this.filmResults = [];
        this.setUserData = () => {
            this.userData = this._filmsSvc.getUsers();
            this.userSessionData = this._filmsSvc.getSessionUsers();
            this.indexUser = this.userData.findIndex((element) => {
                if (element.username === this.userSessionData)
                    return element.username;
            });
        };
        this.addFilmToFav = (id) => {
            this.setUserData();
            this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
        };
        this.removeFilmToFav = (id) => {
            this.setUserData();
            const filmIndex = this.userData[this.indexUser].favourites.indexOf(id);
            (this.userData[this.indexUser].favourites.includes(id)) ?
                this.userData[this.indexUser].favourites.splice(filmIndex, 1) :
                this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
        };
        this.checkFilmInFavourites = (id) => {
            this.setUserData();
            if (this.userData[this.indexUser].favourites.includes(id)) {
                return false;
            }
            else {
                return true;
            }
        };
    }
    ngOnInit() {
    }
    search(title) {
        if (title.trim() === '')
            return;
        this._spinner.show();
        this.title = title;
        this._filmsSvc.getResults(title).subscribe((films) => {
            setTimeout(() => {
                if (films.Response === 'True') {
                    this.filmResults = films.Search;
                    this.noResults = false;
                    this._spinner.hide();
                }
                else if (films.Response === 'False' && films.Error === 'Movie not found!') {
                    this.noResults = true;
                    this.errorFeedback = films.Error;
                    this.filmResults = [];
                    this._spinner.hide();
                }
                else if (films.Response === 'False' && films.Error === 'Too many results.') {
                    this.noResults = true;
                    this.errorFeedback = films.Error;
                    this.filmResults = [];
                    this._spinner.hide();
                }
            }, 2000);
        }, (error) => {
            this.noResults = true;
            this._spinner.hide();
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_films_films_service__WEBPACK_IMPORTED_MODULE_3__["FilmsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 2, consts: [[3, "onEnter"], ["class", "error-feedback", 4, "ngIf"], [1, "film-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "error-feedback"], [1, "card"], [1, "card__title"], ["class", "card__poster", 3, "src", "alt", 4, "ngIf"], ["class", "poster", 4, "ngIf"], [1, "card__buttons"], [1, "card__buttons-link", 3, "routerLink"], ["class", "card__buttons-link button--add", 3, "click", 4, "ngIf"], ["class", "card__buttons-link button--remove", 3, "click", 4, "ngIf"], [1, "card__poster", 3, "src", "alt"], [1, "poster"], [1, "card__buttons-link", "button--add", 3, "click"], [1, "card__buttons-link", "button--remove", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onEnter", function HomeComponent_Template_app_search_input_onEnter_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 10, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filmResults);
    } }, directives: [_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__["SearchInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".error-feedback[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.film-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  \n  margin-bottom: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 300px;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  width: 80%;\n  height: 60px;\n  font-size: 1.2rem;\n  overflow: hidden;\n}\n\n.card__poster[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.poster[_ngcontent-%COMP%] {\n  padding: 2rem .4rem;\n  border: 1px solid black;\n}\n\n.card__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  padding: 1rem .2rem;\n}\n\n.card__buttons-link[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: black;\n  padding: .5rem 1.2rem;\n  text-decoration: none;\n}\n\n.button--add[_ngcontent-%COMP%] {\n  background-color: #102e64;\n}\n\n.button--remove[_ngcontent-%COMP%] {\n  background-color: #a71717;\n}\n\n\n\n@media all and (min-width: 768px) {\n  .film-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 300px);\n    column-gap: 1.5rem;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n\n\n@media all and (min-width:1200px){\n  .film-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 300px);\n  }\n\n  .card__buttons-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n}\n\n\n\n@media all and (min-width:1650px){\n  .film-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 300px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztFQUVuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUdBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWZlZWRiYWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlsbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC8qIFBhcmEgc2FsdmFyIGVsIGZvb3RlciAqL1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmNhcmRfX3RpdGxlIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkX19wb3N0ZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0ZXIge1xuICBwYWRkaW5nOiAycmVtIC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNhcmRfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gLjJyZW07XG59XG5cbi5jYXJkX19idXR0b25zLWxpbmsge1xuICBjb2xvcjogI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IC41cmVtIDEuMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnV0dG9uLS1hZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyZTY0O1xufVxuXG4uYnV0dG9uLS1yZW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTcxNzE3O1xufVxuXG5cbi8qIFRhYmxldCAqL1xuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZpbG0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDMwMHB4KTtcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4vKiBEZXNrdG9wICovXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjEyMDBweCl7XG4gIC5maWxtLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzAwcHgpO1xuICB9XG5cbiAgLmNhcmRfX2J1dHRvbnMtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6MTY1MHB4KXtcbiAgLmZpbG0tY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAzMDBweCk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "sSRS":
/*!*****************************************************************************!*\
  !*** ./src/app/main/pages/movie-description/movie-description.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MovieDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDescriptionComponent", function() { return MovieDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_films_films_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/films/films.service */ "uRFS");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.service */ "XXEo");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MovieDescriptionComponent_div_0_a_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDescriptionComponent_div_0_a_36_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.addFilmToFav(ctx_r3.filmDescription.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDescriptionComponent_div_0_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDescriptionComponent_div_0_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeFilmToFav(ctx_r5.filmDescription.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove to Fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDescriptionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Director:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rated:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actors:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Writer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Plot:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Back to search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MovieDescriptionComponent_div_0_a_36_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MovieDescriptionComponent_div_0_a_37_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.filmDescription.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.filmDescription.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.filmDescription.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Director, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Genre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Rated, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Actors, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Writer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filmDescription.Plot, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkFilmInFavourites(ctx_r0.filmDescription.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkFilmInFavourites(ctx_r0.filmDescription.imdbID));
} }
class MovieDescriptionComponent {
    constructor(_activatedRoute, _filmsSvc, _loginSvc, _spinner) {
        this._activatedRoute = _activatedRoute;
        this._filmsSvc = _filmsSvc;
        this._loginSvc = _loginSvc;
        this._spinner = _spinner;
        this.setUserData = () => {
            this.userData = this._filmsSvc.getUsers();
            this.userSessionData = this._filmsSvc.getSessionUsers();
            this.indexUser = this.userData.findIndex((element) => {
                if (element.username === this.userSessionData)
                    return element.username;
            });
        };
        this.addFilmToFav = (id) => {
            this.setUserData();
            this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
        };
        this.removeFilmToFav = (id) => {
            this.setUserData();
            const filmIndex = this.userData[this.indexUser].favourites.indexOf(id);
            (this.userData[this.indexUser].favourites.includes(id)) ?
                this.userData[this.indexUser].favourites.splice(filmIndex, 1) :
                this.userData[this.indexUser].favourites.push(id);
            this._loginSvc.saveUser(this.userData);
        };
        this.checkFilmInFavourites = (id) => {
            this.setUserData();
            if (this.userData[this.indexUser].favourites.includes(id)) {
                return false;
            }
            else {
                return true;
            }
        };
    }
    ngOnInit() {
        this._spinner.show();
        this._activatedRoute.params.subscribe(({ id }) => {
            console.log(id);
            this._filmsSvc.getFilmDescription(id).subscribe(film => {
                this.filmDescription = film;
                this._spinner.hide();
            });
        });
    }
}
MovieDescriptionComponent.ɵfac = function MovieDescriptionComponent_Factory(t) { return new (t || MovieDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_films_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
MovieDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDescriptionComponent, selectors: [["app-movie-description"]], decls: 1, vars: 1, consts: [["class", "film-container", 4, "ngIf"], [1, "film-container"], [1, "card"], [1, "first"], [1, "card__title"], [1, "card__poster", 3, "src", "alt"], [1, "second"], [1, "card__sub-title"], [1, "card__description-text"], [1, "card__buttons"], ["routerLink", "/home", 1, "card__butons-link"], ["class", "card__butons-link button--add", 3, "click", 4, "ngIf"], ["class", "card__butons-link button--remove", 3, "click", 4, "ngIf"], [1, "card__butons-link", "button--add", 3, "click"], [1, "card__butons-link", "button--remove", 3, "click"]], template: function MovieDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDescriptionComponent_div_0_Template, 38, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filmDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".film-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  \n  margin-bottom: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n}\n\n.card__poster[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.card__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 1rem .2rem;\n}\n\n.card__butons-link[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: black;\n  padding: .5rem 1.2rem;\n  text-decoration: none;\n}\n\n.button--add[_ngcontent-%COMP%] {\n  background-color: #102e64;\n}\n\n.button--remove[_ngcontent-%COMP%] {\n  background-color: #a71717;\n}\n\n\n\n@media all and (min-width: 768px) {\n\n  .film-container[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 1rem;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .card__description-text[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .card__buttons[_ngcontent-%COMP%] {\n    justify-content: space-evenly;\n  }\n}\n\n\n\n@media all and (min-width:1200px){\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 400px 1fr;\n    column-gap: 1rem;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .card__sub-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .card__buttons[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n\n  .card__butons-link[_ngcontent-%COMP%]:last-child {\n    margin-left: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0EsV0FBVzs7QUFDWDs7RUFFRTtJQUNFLGNBQWM7SUFDZDtFQUNGOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6Im1vdmllLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICAvKiBQYXJhIHNhbHZhciBlbCBmb290ZXIgKi9cbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xufVxuXG4uY2FyZF9fcG9zdGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZF9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gLjJyZW07XG59XG5cbi5jYXJkX19idXRvbnMtbGluayB7XG4gIGNvbG9yOiAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogLjVyZW0gMS4ycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXR0b24tLWFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDJlNjQ7XG59XG5cbi5idXR0b24tLXJlbW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzE3MTc7XG59XG5cblxuLyogVGFibGV0ICovXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5maWxtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhcmRfX2Rlc2NyaXB0aW9uLXRleHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuY2FyZF9fYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbn1cblxuLyogRGVza3RvcCAqL1xuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxMjAwcHgpe1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZF9fc3ViLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNhcmRfX2J1dHRvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5jYXJkX19idXRvbnMtbGluazpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "uRFS":
/*!*************************************************!*\
  !*** ./src/app/services/films/films.service.ts ***!
  \*************************************************/
/*! exports provided: FilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsService", function() { return FilmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FilmsService {
    constructor(_http) {
        this._http = _http;
        this._baseUrl = 'http://www.omdbapi.com/?apikey=f9c9cdc8';
        this.getResults = (title) => {
            const url = `${this._baseUrl}&s=${title}`;
            return this._http.get(url);
        };
        this.getFilmDescription = (id) => {
            const url = `${this._baseUrl}&i=${id}`;
            return this._http.get(url);
        };
        this.getUsers = () => {
            const data = localStorage.getItem('user');
            return JSON.parse(data);
        };
        this.getSessionUsers = () => {
            return sessionStorage.getItem('userSession');
        };
    }
}
FilmsService.ɵfac = function FilmsService_Factory(t) { return new (t || FilmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FilmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilmsService, factory: FilmsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/check-login.guard */ "9+8r");
/* harmony import */ var _main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/pages/login/login.component */ "xHn+");
/* harmony import */ var _main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/pages/home/home.component */ "lJ4n");
/* harmony import */ var _main_pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/pages/favourites/favourites.component */ "1x9+");
/* harmony import */ var _main_pages_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/pages/movie-description/movie-description.component */ "sSRS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _main_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'home', component: _main_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_1__["CheckLoginGuard"]] },
    { path: 'movie/:id', component: _main_pages_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_5__["MovieDescriptionComponent"], canActivate: [_shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_1__["CheckLoginGuard"]] },
    { path: 'favourites', component: _main_pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"], canActivate: [_shared_guards_check_login_guard__WEBPACK_IMPORTED_MODULE_1__["CheckLoginGuard"]] },
    { path: '**', redirectTo: '/home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xHn+":
/*!*****************************************************!*\
  !*** ./src/app/main/pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.service */ "XXEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Username must be longer than ", (tmp_0_0 = ctx_r0.loginForm.get("username")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.minlength.requiredLength, " characters.");
} }
const _c0 = function (a0) { return { "input-invalid": a0 }; };
const _c1 = function (a0, a1) { return { "label-invalid": a0, "form__input-active": a1 }; };
class LoginComponent {
    constructor(_formBuilder, _router, _loginService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._loginService = _loginService;
        this.loginForm = this._formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            favourites: [[]]
        });
        this.newUser = [];
        this.usersData = [];
        this.isLogged = false;
        this.onSubmit = () => {
            var _a, _b, _c;
            this.newUser = this.loginForm.value;
            if (this._loginService.getUsersData() === null) {
                this._loginService.setTokenSession((_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.value);
                this._loginService.saveUser([this.newUser]);
            }
            else {
                const data = this._loginService.getUsersData();
                const username = data.findIndex((user) => { var _a; return user.username === ((_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.value); });
                const password = data.findIndex((user) => { var _a; return user.password === ((_a = this.loginForm.get('password')) === null || _a === void 0 ? void 0 : _a.value); });
                if (username !== -1 && password !== -1) {
                    this._loginService.setTokenSession((_b = this.loginForm.get('username')) === null || _b === void 0 ? void 0 : _b.value);
                    this._router.navigate(['home']);
                }
                else {
                    this._loginService.setTokenSession((_c = this.loginForm.get('username')) === null || _c === void 0 ? void 0 : _c.value);
                    this.usersData.push(this.newUser);
                    this._loginService.saveUser(this.usersData);
                    this._router.navigate(['home']);
                }
            }
        };
        this.fieldIsValid = (name) => {
            const fieldName = this.loginForm.get(name);
            return (fieldName.invalid && fieldName.touched);
        };
        this.labelAnimation = (name) => {
            const fieldName = this.loginForm.get(name);
            return (!fieldName.pristine && fieldName.value);
        };
        this.checkSession = () => {
            sessionStorage.getItem('userSession') === null ?
                this.isLogged = false :
                this.isLogged = true;
            this.isLogged === true && this._router.navigate(['home']);
        };
    }
    ngOnInit() {
        this.checkSession();
        this.usersData = this._loginService.getUsersData();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 17, consts: [[1, "form-container"], ["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form__field"], ["type", "text", "formControlName", "username", 1, "form__input", 3, "ngClass"], [1, "form__input-label", 3, "ngClass"], ["type", "password", "formControlName", "password", 1, "form__input", 3, "ngClass"], ["type", "submit", 1, "form__submit-button", 3, "disabled"], [1, "form__feedback"], [1, "form__feedback-text"], ["class", "form__feedback-text-float", 4, "ngIf"], [1, "form__feedback-text-float"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Please enter your username and password. If the user does not exist, a new user will be generated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_6_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.fieldIsValid("username")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, ctx.fieldIsValid("username"), ctx.labelAnimation("username")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.fieldIsValid("password")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c1, ctx.fieldIsValid("password"), ctx.labelAnimation("password")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.loginForm.get("username")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.minlength);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  display: grid;\n  place-items: center;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  padding: .4rem 1rem;\n  font-size: 1rem;\n  border: none;\n  border-bottom: 2px solid black;\n  background-color: transparent;\n  outline: none;\n  z-index: 20;\n}\n\n.form__input-label[_ngcontent-%COMP%] {\n  position: relative;\n  top: -35px;\n  left: .8rem;\n  z-index: 10;\n  transition: top .5s;\n}\n\n.form__input[_ngcontent-%COMP%]:focus    + .form__input-label[_ngcontent-%COMP%] {\n  top: -3.5rem;\n}\n\n.form__input-active[_ngcontent-%COMP%] {\n  top: -3.5rem;\n}\n\n.label-invalid[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.input-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form__submit-button[_ngcontent-%COMP%] {\n  padding: .4rem 3rem;\n  background-color: black;\n  border: none;\n  font-size: 1rem;\n  color: #eee;\n  outline: none;\n}\n\n.form__feedback-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n\n.form__feedback-text-float[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: red;\n  color: #eee;\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  padding-top: 5rem;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  padding-bottom: .8rem;\n  text-align: center;\n  top: 0;\n}\n\n@media all and (min-width: 960px) {\n  .form__submit-button[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybV9faW5wdXQge1xuICBwYWRkaW5nOiAuNHJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMjA7XG59XG5cbi5mb3JtX19pbnB1dC1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzVweDtcbiAgbGVmdDogLjhyZW07XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiB0b3AgLjVzO1xufVxuXG4uZm9ybV9faW5wdXQ6Zm9jdXMgKyAuZm9ybV9faW5wdXQtbGFiZWwge1xuICB0b3A6IC0zLjVyZW07XG59XG5cbi5mb3JtX19pbnB1dC1hY3RpdmUge1xuICB0b3A6IC0zLjVyZW07XG59XG5cbi5sYWJlbC1pbnZhbGlkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmlucHV0LWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmZvcm1fX3N1Ym1pdC1idXR0b24ge1xuICBwYWRkaW5nOiAuNHJlbSAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZWVlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi5mb3JtX19mZWVkYmFjay10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9ybV9fZmVlZGJhY2stdGV4dC1mbG9hdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmZvcm1fX3N1Ym1pdC1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map