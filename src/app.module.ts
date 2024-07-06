import { Module } from '@nestjs/common';
import { MoviesController } from './app.controller';
import { MovieService } from './app.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class AppModule {}
