import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from "./post.entity";
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}