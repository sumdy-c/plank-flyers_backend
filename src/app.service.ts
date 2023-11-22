import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

// import { Client } from '@heroiclabs/nakama-js';
import { PrismaClient } from '@prisma/client';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getMovies(): Movie[] {
    // const prisma = new PrismaClient();
    const prisma = new PrismaClient();
    const fn = async () => {
      const users = await prisma.users.findMany();
      Logger.log(users);
    };

    fn();
    return this.movies;
  }
}
