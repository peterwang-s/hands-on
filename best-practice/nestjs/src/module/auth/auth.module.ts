import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtConstants } from './auth.constants';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';

import { LoginInputDTO } from './dto/login-input.dto';
// import { LoginResponseDTO } from './dto/login-response.dto';
import { AuthEntity, AuthEntitySchema } from './auth.entity';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          {
            document: AuthEntity,
            name: AuthEntity.name,
            schema: AuthEntitySchema,
          },
        ]),
      ],
      resolvers: [
        {
          DTOClass: LoginInputDTO,
          EntityClass: AuthEntity,
          // LoginResponseDTOClass: LoginResponseDTO,
          //   CreateDTOClass: LoginResponseDTO,
          //   UpdateDTOClass: SubTaskUpdateDTO,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
