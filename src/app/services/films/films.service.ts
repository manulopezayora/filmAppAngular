import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from 'src/app/main/interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private _baseUrl: string = 'http://www.omdbapi.com/?apikey=f9c9cdc8';

  constructor(private _http: HttpClient) { }

  getResults = (title: string) => {
    const url = `${this._baseUrl}&s=${title}`;
    return this._http.get<Result[]>(url);
  }

  getFilmDescription = (id: string) => {
    const url = `${this._baseUrl}&i=${id}`;
    return this._http.get<Result[]>(url);
  }

  getUsers = () => {
    const data: any = localStorage.getItem('user');
    return JSON.parse(data)
  }

  getSessionUsers = () => {
    return sessionStorage.getItem('userSession');
  }

}
