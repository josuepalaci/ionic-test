import { Injectable } from '@angular/core';
import { Movie } from "./movie.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [
    {id: '1', title: "Turbo1", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: ["exiting", "very funny"]},
    {id: '2', title: "Turbo2", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: ["exiting", "very funny"]},
    {id: '3', title: "Turbo3", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: ["exiting", "very funny"]},
    {id: '4', title: "Turbo4", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: ["exiting", "very funny"]},
    {id: '5', title: "Turbo5", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: ["exiting", "very funny"]},
    {id: '6', title: "Turbo5", img: "https://image.freepik.com/vector-gratis/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg", comments: []},
  ]

  constructor() { }
  
  getMovie(id){
    return {
      ...this.movies.find( movie => {
        return movie.id === id
      })
    }
  }

  getMovies(): Movie[]{
    return [...this.movies];
  }

  addMovies(title: string, imgUrl: string){
    this.movies.push({
      id: this.movies.length + 1 + '',
      title,
      img: imgUrl,
      comments: []
    });
  }

  deleteMovies(id: string){
    this.movies = this.movies.filter(item=>{
      return item.id !== id
    });
  }


}
