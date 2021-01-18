import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.page.html',
  styleUrls: ['./movie-add.page.scss'],
})
export class MovieAddPage implements OnInit {

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewMovie(title, imgUrl){
    // console.log(title.value, imgUrl.value);
    this.movieService.addMovies(title.value, imgUrl.value);
    this.router.navigate(['movies'])
  }

}
