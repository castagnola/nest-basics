import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalGuards(new AuthGuard()); //Use Guards Globally
  //app.useGlobalInterceptors(new LoggingInterceptor()); //Outside if the container
  //app.useGlobalPipes(new FreezePipe());
  //app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
