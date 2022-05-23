import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* TODO gerer les autorisations CORS */
  app.enableCors();
  await app.listen(4200);
}
bootstrap();
