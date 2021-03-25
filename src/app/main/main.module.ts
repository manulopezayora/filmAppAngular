import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, FavouritesComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
