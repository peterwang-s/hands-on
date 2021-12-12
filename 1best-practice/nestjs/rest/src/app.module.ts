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
import { NestjsQueryCoreModule } from '@nestjs-query/core';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';

/**
 * 保持代码组织并建立清晰的边界（对相关组件进行分组）
 */
@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://nest:nest@localhost:27017/nest-mongo?authSource=nest-mongo&w=1',
      'mongodb://localhost:27017',
      {
        auth: {
          username: 'admin',
          password: 'admin',
        },
        dbName: 'nest',
        useNewUrlParser: true,
        // useCreateIndex: true,
      },
    ),
    JwtModule.register({
      secret: 'nestjs-query-secret!!!',
      signOptions: { expiresIn: '1d' },
    }),
    NestjsQueryCoreModule,
    UsersModule,
    AuthModule,
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
