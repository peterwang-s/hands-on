import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
/**
 * 生成实体类/接口来表示资源数据结构
 */
@Schema({ timestamps: true })
export class UserEntity extends Document {
  @Prop({ required: true, default: uuidv4() })
  id!: string;

  @Prop()
  username!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ default: new Date() })
  createdAt!: Date;

  @Prop({ default: new Date() })
  updatedAt!: Date;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);
