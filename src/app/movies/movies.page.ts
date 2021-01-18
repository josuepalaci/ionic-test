import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = []

  constructor(private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies()
  }

  ionViewWillEnter(){
    this.movies = this.moviesService.getMovies()
  }

  addNewMovie(){
    console.log('add');
    this.router.navigate(['newMovie'])
  }

  goHome(){
    this.router.navigate(['home'])
  }

}
