import { Injectable } from '@nestjs/common';
import { Movie, movies } from './movies-database';

@Injectable()
export class MovieService {
//this function will be called in the get function
  getAllMovies(): Movie[] {
    return movies;
  }
//this function will be called in the get function that requires an id
  getMoviesById(movieID: number): Movie | undefined {
    return movies.find((movie)=> movie.id === movieID);
  }
//this will be called in the good old post request
  create(movie: Partial<Movie>): Movie {
    const newID = movies[movies.length-1].id + 1;
    const newMovie: Movie = {
      id: newID,
      title: movie.title,
      author: movie.author,
      releasedate: movie.releasedate
    };
    movies.push(newMovie);
    return newMovie;
  }
//this will be called in put
  update(movieID: number, updatedMovieFields: Partial<Movie>): Movie | undefined{
    const currentMovie = movies.find((movie) => movie.id === movieID);
    const updatedMovie = {
      id: movieID,
      title: updatedMovieFields.title ?? currentMovie.title,
      author: updatedMovieFields.author ?? currentMovie.author,
      releasedate: updatedMovieFields.releasedate ?? currentMovie.releasedate
    };
    movies[movieID - 1] = updatedMovie;
    return updatedMovie;
  }
//this will be called in delete
  delete(movieID: number): Movie[] | undefined {
    movies.splice(movieID - 1, 1);
    return movies;
  }
}
