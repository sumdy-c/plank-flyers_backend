import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { FileController } from './models/models.controller';

@Module({
  imports: [],
  controllers: [UsersController, FileController],
  providers: [],
})
export class AppModule {}
