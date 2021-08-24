import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { BaiduBceModule } from './module/basic/baidubce.module';

@Module({
  imports: [
    GraphQLModule.forRoot({}),
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        process.env.NODE_ENV === 'staging' ? '.env.staging' : '.env',
      ],
    }),
    BaiduBceModule
  ]
})
export class AppModule {}
