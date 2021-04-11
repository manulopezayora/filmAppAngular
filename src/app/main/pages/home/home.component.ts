import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title         : string  = '';
  noResults     : boolean = true;
  errorFeedback : string  = 'Please, write title to search...';
  filmResults   : any[]   = [];


  constructor(
    private _spinner: NgxSpinnerService,
    private _filmSvc: FilmsService
    ) { }

  ngOnInit(): void {
  }

  search(title: string) {
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

}
