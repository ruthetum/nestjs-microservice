import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from "./post.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  controllers: [PostController],
})
export class PostModule {}
