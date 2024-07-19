/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.schema/post.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  exports: [PostsService],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
