import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { UserEntity, UserEntitySchema } from './user.entity';
import { UserDTO } from './user.dto';
@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          {
            document: UserEntity,
            name: UserEntity.name,
            schema: UserEntitySchema,
          },
        ]),
      ],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: UserEntity,
          // LoginResponseDTOClass: LoginResponseDTO,
          //   CreateDTOClass: LoginResponseDTO,
          //   UpdateDTOClass: SubTaskUpdateDTO,
          enableAggregate: true,
        },
      ],
    }),
  ],
  exports: [],
})
export class UserModule {}
