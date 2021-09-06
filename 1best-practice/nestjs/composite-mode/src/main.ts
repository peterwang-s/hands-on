import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

import config from './config/index';

console.log(process.env.NODE_ENV);

/**
 *  NestJS 构建块（模块、服务、控制器类），还生成实体类、DTO 类以及测试 ( .spec) 文件
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '../src', 'views'));
  hbs.registerPartials(join(__dirname, '../src', 'views/partials'));
  app.setViewEngine('hbs');
  // app.set('view options', {
  //   extname: 'hbs',
  //   // defaultLayout: 'base',
  //   layoutDir: join(__dirname, '../src', 'views/layouts'),
  //   partialsDir: join(__dirname, '../src', 'views/partials')
  // });
  await app.listen(config.app.port).then(() => {
    console.log(`service start with port: ${config.app.port}`);
  });
}
bootstrap();
