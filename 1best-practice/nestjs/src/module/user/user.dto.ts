import {
  Field,
  InputType,
  ObjectType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { IsString, IsDate } from 'class-validator';

@ObjectType('user')
export class UserDTO {
  @IDField(() => ID)
  @IsString()
  id!: string;

  @FilterableField({ allowedComparisons: ['eq', 'like', 'notLike'] })
  @IsString()
  username!: string;

  @Field()
  @IsString()
  password!: string;

  @Field(() => GraphQLISODateTime)
  @IsDate()
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  @IsDate()
  updatedAt!: Date;

  @Field()
  @IsString()
  createdBy?: string;

  @Field()
  @IsString()
  updatedBy?: string;
}
