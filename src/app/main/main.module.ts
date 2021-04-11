import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FavouritesComponent,
    SearchInputComponent,
    MovieDescriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MainModule {

}
