import { Injectable } from '@nestjs/common';
import { Client } from '@heroiclabs/nakama-js';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  testNakama() {
    const client = new Client();
    console.log(client);
  }
  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getMovies(): Movie[] {
    this.testNakama();
    return this.movies;
  }
}
