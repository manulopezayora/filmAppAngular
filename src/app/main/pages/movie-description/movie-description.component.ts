import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilmsService } from '../../../services/films/films.service';


@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  filmDescription: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _filmsSvc: FilmsService,
    private _spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this._spinner.show();
    this._activatedRoute.params.subscribe(({ id }) => {
      console.log(id)
      this._filmsSvc.getMovieDescription(id).subscribe(film => {
        this.filmDescription = film;
        this._spinner.hide();
        console.log(this.filmDescription)
      })
    })
  }

}
