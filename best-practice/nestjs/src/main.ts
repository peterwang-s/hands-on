import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

import config from './config/index';

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
