import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function root() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}

root();
