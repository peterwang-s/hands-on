import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { AuthenticatedUser, JwtPayload } from './interface/auth.interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectQueryService(UserEntity)
    private usersService: QueryService<UserEntity>, // private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';

    // try {
    // const user = await this.usersService.getById(createUserDto.id);
    const user = await this.usersService.createOne(createUserDto);
    return user;
    // } catch (e) {
    //   throw new UnauthorizedException();
    // }
  }

  async findAll() {
    try {
      // const user = await this.usersService.getById(createUserDto.id);
      const user = await this.usersService.query({});
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    try {
      // const user = await this.usersService.getById(createUserDto.id);
      const user = await this.usersService.getById(id);
      return user;
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
}
