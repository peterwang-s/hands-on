import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { BaiduBceModule } from './module/basic/baidubce.module';
import { MongodbModule } from './module/database/mongodb.module';
// import { GQLModule } from './module/graphql/gql.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

// import { BaiduBceService } from './services/basic/baidubce.service';
interface HeadersContainer {
  headers?: Record<string, string>;
}
interface ContextArgs {
  req?: HeadersContainer;
  connection?: { context: HeadersContainer };
}
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        !process.env.NODE_ENV ? `.env` : `.env.${process.env.NODE_ENV || ''}`,
      ],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      subscriptions: {
        onConnect: (connectionParams: unknown) => ({
          headers: connectionParams,
        }),
      },
      context: ({ req, connection }: ContextArgs) => ({
        req: { ...req, ...connection?.context },
      }),
    }),
    HttpModule,
    MongodbModule,
    // GQLModule,
    BaiduBceModule,
    UserModule,
    AuthModule,
  ],
  // providers: [BaiduBceService],
})
export class AppModule {}
