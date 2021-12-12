import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'nestjs-query-secret!!!',
    });
  }

  // JWT 验证方法，将被守卫调用
  // validate(payload: { sub: string; username: string }): Promise<{
  //   id: string;
  //   username: string;
  // }> {
  //   return Promise.resolve({ id: payload.sub, username: payload.username });
  // }

  async validate(payload: { sub: string; username: string }): Promise<any> {
    const user = await this.authService.validateUser(
      payload.username,
      payload.sub,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
