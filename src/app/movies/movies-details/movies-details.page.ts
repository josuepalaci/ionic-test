import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { AlertController } from '@ionic/angular';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {

  movie: Movie;
  num: number;
  lista = {
    input1: "input1",
  };

  constructor(private router: Router, 
    private activateRoute: ActivatedRoute, public alertController: AlertController,
    private movieService: MoviesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        const recipeId = paramMap.get('movieId');
        this.movie = this.movieService.getMovie(recipeId);
        console.log(this.movie);
      } 
    );
      this.num = 1;
  }

  async deleteMovie(){
    const alertElement = await this.alertController.create({
      header: 'Are you sure, you want to delete it?',
      message: 'reading careful',
      buttons: [
        { text: 'Cancel', role: 'cancel'},
        { text: 'Delete', handler: () => {
          this.movieService.deleteMovies(this.movie.id);
          this.router.navigate(['movies'])
        }},
      ] 
    });
    await alertElement.present();
  }

}
