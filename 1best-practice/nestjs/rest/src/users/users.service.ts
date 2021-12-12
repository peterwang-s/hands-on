import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
// import { v4 as uuidv4 } from 'uuid';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginResponseDto } from './dto/login-res.dto';

import { AuthenticatedUser, JwtPayload } from './interface/auth.interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectQueryService(UserEntity)
    private usersQueryService: QueryService<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersQueryService.createOne(createUserDto);
    return user;
  }

  async findAll() {
    try {
      // const user = await this.usersService.getById(createUserDto.id);
      const user = await this.usersQueryService.query({});
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    try {
      // const user = await this.usersService.getById(createUserDto.id);
      const user = await this.usersQueryService.getById(id);
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async findOneByUsernameAndId(username: string, id: string) {
    try {
      const [userResult] = await this.usersQueryService.query({
        filter: {
          username: { eq: username },
          id: { eq: id },
        },
        paging: { limit: 1 },
      });
      return userResult;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(user: {
    username: string;
    password: string;
  }): Promise<LoginResponseDto> {
    const { username, password } = user;
    const [userResult] = await this.usersQueryService.query({
      filter: { username: { eq: username } },
      paging: { limit: 1 },
    });
    const passhash = await bcrypt.hash(password, userResult.salt);
    if (userResult && userResult.password === passhash) {
      const payload: JwtPayload = {
        username: userResult.username,
        sub: userResult._id,
      };
      return Promise.resolve({
        accessToken: this.jwtService.sign(payload),
      });
    } else {
      return 'user not find';
    }
  }

  async register(user: {
    username: string;
    password: string;
  }): Promise<LoginResponseDto> {
    const { username, password } = user;
    const [userResult] = await this.usersQueryService.query({
      filter: { username: { eq: username } },
      paging: { limit: 1 },
    });
    if (userResult) {
      const passhash = await bcrypt.hash(password, userResult.salt);
      if (userResult.password === passhash) {
        const payload: JwtPayload = {
          username: userResult.username,
          sub: userResult._id,
        };
        return Promise.resolve({
          accessToken: this.jwtService.sign(payload),
        });
      }
    } else {
      const salt = await bcrypt.genSalt();
      return this.create({
        username,
        password: await bcrypt.hash(password, salt),
        salt,
      });
    }
  }
}
