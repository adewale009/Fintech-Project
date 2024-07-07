/* eslint-disable prettier/prettier */

//  user schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  userId: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);

// export class PostSchema {}
