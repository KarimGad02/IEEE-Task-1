import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './app.service';
import { Movie } from './movies-database'

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}
//getting a list of movies
  @Get()
  getAllMovies(): Movie[] {
    return this.movieService.getAllMovies();
  }
//getting each movie by its id
  @Get(':id')
  getMovieByID(@Param('id') id: string): Movie | undefined{
    const movieID = +id;
    return this.movieService.getMoviesById(movieID)
  }
//post... just good old post
  @Post()
  addMovie(@Body() movie: Partial<Movie>): Movie | undefined {
    const movieData = movie;
    if(!movie.title || !movie.author || !movie.releasedate) return undefined;
    return this.movieService.create(movieData)
  }
//put to update a specific movie using the id
  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Partial<Movie>): Movie | undefined {
    const movieID = +id;
    return this.movieService.update(movieID, movie);
  }
//delete a specific movie using the id
  @Delete(':id')
  deleteMovie(@Param('id') id: string): Movie[] | undefined {
    return this.movieService.delete(+id);
  }
}
