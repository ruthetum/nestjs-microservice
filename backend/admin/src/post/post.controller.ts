import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    async all() {
        return this.postService.all();
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.postService.get(id);
    }

    @Post()
    async create(
        @Body('title') title: string,
        @Body('content') content: string,
    ) {
        return this.postService.create({
            title,
            content
        });
    }
}