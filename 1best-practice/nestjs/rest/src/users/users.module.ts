import { Module } from '@nestjs/common';
// import { NestjsQueryCoreModule } from '@nestjs-query/core';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';

// import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity, UserEntitySchema } from './entities/user.entity';
@Module({
  imports: [
    JwtModule.register({
      secret: 'nestjs-query-secret!!!',
      signOptions: { expiresIn: '1d' },
    }),
    // NestjsQueryCoreModule,
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
  exports: [UsersService],
})
export class UsersModule {}
