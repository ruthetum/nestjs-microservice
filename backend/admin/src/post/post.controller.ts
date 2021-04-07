import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    all() {
        return this.postService.all();
    }

    @Post()
    create(
        @Body('title') title: string,
        @Body('content') content: string,
    ) {
        return this.postService.create({
            title,
            content
        });
    }
}