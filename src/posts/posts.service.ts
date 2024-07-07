/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async create(post: Post): Promise<Post> {
    const createdPost = new this.postModel(post);
    return createdPost.save();
  }

  async remove(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id).exec();
  }
}
