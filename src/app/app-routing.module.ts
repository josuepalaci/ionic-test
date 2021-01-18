import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "formularios",
    pathMatch: "full",
  },
  {
    path: "movies",
    children: [
      {
        path: '',
        loadChildren: () => import("./movies/movies.module").then((m) => m.MoviesPageModule),
      },
      {
        path: ':movieId',
        loadChildren: () => import('./movies/movies-details/movies-details.module').then((m)=> m.MoviesDetailsPageModule),
      }
    ]
  },
  {
    path: "newMovie",
    loadChildren: () =>
      import("./movies/movie-add/movie-add.module").then((m) => m.MovieAddPageModule),
  },
  {
    path: 'formularios',
    children: [
      {
        path: '',
        loadChildren: () => import('./formularios/formularios.module').then( m => m.FormulariosPageModule)
      },
      {
        path: 'importar',
        loadChildren: () => import('./formularios/importar/importar.module').then( m => m.ImportarPageModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('./formularios/agregar/agregar.module').then( m => m.AgregarPageModule)
      },
      {
        path: 'exportar',
        loadChildren: () => import('./formularios/exportar/exportar.module').then( m => m.ExportarPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
