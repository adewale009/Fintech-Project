/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'princey',
      password: 'ade123',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    PostsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
