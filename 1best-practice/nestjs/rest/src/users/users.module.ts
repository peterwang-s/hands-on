import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { NestjsQueryCoreModule } from '@nestjs-query/core';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity, UserEntitySchema } from './entities/user.entity';

@Module({
  imports: [
    NestjsQueryCoreModule,
    // JwtModule.register({
    //   secret: 'nestjs-query-secret!!!',
    //   signOptions: { expiresIn: '1d' },
    // }),
    NestjsQueryMongooseModule.forFeature([
      {
        document: UserEntity,
        name: UserEntity.name,
        schema: UserEntitySchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
