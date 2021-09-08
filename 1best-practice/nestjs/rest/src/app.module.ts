import {
  Module,
  NestModule,
  /**
   * MiddlewareConsumer是一个帮助类,提供了多种内置方法来管理中间件
   *
   */
  MiddlewareConsumer,
  // RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://nest:nest@localhost:27017/nest-mongo?authSource=nest-mongo&w=1',
      'mongodb://localhost:27017',
      {
        auth: {
          username: 'nest',
          password: 'nest',
        },
        dbName: 'nest-mongo',
        useNewUrlParser: true,
        // useCreateIndex: true,
      },
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
