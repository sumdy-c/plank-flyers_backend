import { Controller, Get } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    console.log('Hello');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }
}
