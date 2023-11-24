import { Controller, Get, Logger, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDTO } from './UserDTO';

@Controller('users')
export class UsersController {
  users = null;

  fn = async () => {
    const prisma = new PrismaClient();
    this.users = await prisma.users.findMany();
  };

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
