import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaModule } from '../prisma/prisma.module';
// import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
    PrismaModule,
    UsersModule,
    PostsModule,
  ],
  // providers: [PrismaService],
})
export class AppModule {}
