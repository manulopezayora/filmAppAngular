import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckLoginGuard } from './shared/guards/check-login.guard';

import { LoginComponent } from './main/pages/login/login.component';
import { HomeComponent } from './main/pages/home/home.component';
import { FavouritesComponent } from './main/pages/favourites/favourites.component';
import { MovieDescriptionComponent } from './main/pages/movie-description/movie-description.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [CheckLoginGuard]},
  {path: 'movie/:id', component: MovieDescriptionComponent, canActivate: [CheckLoginGuard]},
  {path: 'favourites', component: FavouritesComponent, canActivate: [CheckLoginGuard]},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
