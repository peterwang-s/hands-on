import {
  Field,
  InputType,
  ObjectType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { IsString, IsDate } from 'class-validator';

/**
 * 生成数据传输对象（或 GraphQL 应用程序的输入）以定义如何通过网络发送数据
 */
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
