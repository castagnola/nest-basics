import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { RequestService } from './request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    RequestService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard, //Global Auth guard
    },
    {
      provide: APP_GUARD,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor, //Global  Intercep[tor]
    },
  ],
})
export class AppModule implements NestModule {
  //Configure middleware in our app
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
