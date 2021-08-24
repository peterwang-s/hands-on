import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BosClient } from '@baiducloud/sdk';
import { BaiduBceCtl } from '../../controllers/basic/baidubce.controller';
import { BaiduBceService } from '../../services/basic/baidubce.service';

import * as path from 'path';
const PWD = process.env.PWD || process.cwd();

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: false,
      envFilePath: [
        process.env.NODE_ENV === 'production'
          ? path.join(PWD + `/src/variable/basic/.env`)
          : path.join(
              PWD +
                `/src/variable/basic/.env.${
                  process.env.NODE_ENV || 'development'
                }`,
            ),
      ],
    }),
  ],
  controllers: [BaiduBceCtl],
  providers: [BosClient, BaiduBceService],
  exports: [BaiduBceService],
})
export class BaiduBceModule {}
