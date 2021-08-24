import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { GqlContext } from './auth.guard';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({
        req,
      }: {
        req: { headers: Record<string, string> };
      }): GqlContext => ({ request: req }),
    }),
  ],
})
export class GQLModule {}
