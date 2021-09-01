import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://nest:nest@localhost:27017/nest-mongo?authSource=nest-mongo&w=1',
      'mongodb://localhost:27017',
      {
        user: 'nest',
        pass: 'nest',
        dbName: 'nest-mongo',
        useNewUrlParser: true,
        useCreateIndex: true,
      },
    ),
  ],
})
export class MongodbModule {}
