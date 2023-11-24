import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDTO } from './UserDTO';

@Controller('users')
export class UsersController {
  users = null;

  fn = async () => {
    const prisma = new PrismaClient();
    this.users = await prisma.users.findMany();
  };

  @Post()
  @Redirect('http://0.0.0.0:8080/', 301)
  create(@Body() createDTO: UserDTO): string {
    Logger.log(createDTO);
    return 'This action add new user!';
  }

  @Get(':id')
  async getOneUser(@Param() params: string): Promise<string> {
    Logger.log(params);
    await this.fn();
    return this.users;
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUsers(@Param() createDTO: UserDTO): Promise<object> {
    await this.fn();
    return this.users;
  }
}
