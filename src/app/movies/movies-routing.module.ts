import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: 'movies-details',
    loadChildren: () => import('./movies-details/movies-details.module').then( m => m.MoviesDetailsPageModule)
  },
  {
    path: 'movie-add',
    loadChildren: () => import('./movie-add/movie-add.module').then( m => m.MovieAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
