import { Injectable } from '@nestjs/common';
// import { Client } from '@heroiclabs/nakama-js';
// import { PrismaClient } from '@prisma/client';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  // prisma = new PrismaClient();

  async main() {
    // const allUsers = await this.prisma.users.findMany();
    // console.log(allUsers);
  }

  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2020 },
  ];

  getMovies(): Movie[] {
    // this.main()
    //   .then(async () => {
    //     await this.prisma.$disconnect();
    //   })
    //   .catch(async (e) => {
    //     console.error(e);
    //     await this.prisma.$disconnect();
    //     process.exit(1);
    //   });

    return this.movies;
  }
}
