import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, IsDate } from 'class-validator';
@InputType()
export class UserDTO {
  @Field()
  @IsString()
  id!: string;

  @Field()
  @IsString()
  username!: string;

  @Field()
  @IsString()
  password!: string;

  @Field()
  @IsDate()
  createdAt!: Date;

  @Field()
  @IsDate()
  updatedAt!: Date;

  @Field()
  @IsString()
  createdBy?: string;

  @Field()
  @IsString()
  updatedBy?: string;
}
