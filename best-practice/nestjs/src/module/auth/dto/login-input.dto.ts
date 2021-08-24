import {
  Field,
  InputType,
  ObjectType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { IsString } from 'class-validator';

@ObjectType('logininput')
export class LoginInputDTO {
  @FilterableField()
  @IsString()
  username!: string;

  @Field()
  @IsString()
  password!: string;
}
