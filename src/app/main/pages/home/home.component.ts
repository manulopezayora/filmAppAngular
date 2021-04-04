import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title      : string  = '';
  noResults  : boolean = true;
  filmResults: any[]   = [];


  constructor(private _filmSvc: FilmsService) { }

  ngOnInit(): void {
  }

  search(title: string) {
    this.title = title;
    this._filmSvc.getResults(title).subscribe(
      (films: any) => {
        this.filmResults = films.Search;
        this.noResults = false;
        console.log(this.filmResults)
      },
      (error) => {
        this.noResults = true;
        console.error(error)
      }
    )
  }

}
