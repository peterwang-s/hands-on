import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [
    JwtModule.register({
      secret: 'nestjs-query-secret!!!',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
