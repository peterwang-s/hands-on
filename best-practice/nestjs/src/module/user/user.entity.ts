import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserEntity extends Document {
  @Prop({ required: true })
  id!: string;

  @Prop()
  username!: string;

  @Prop({ required: true })
  password!: string;

  @Prop()
  createdAt!: Date;

  @Prop()
  updatedAt!: Date;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);
