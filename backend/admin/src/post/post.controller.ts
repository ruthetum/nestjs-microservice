import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('content') content: string
    ) {
        return this.postService.update(id, {
            title,
            content
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.postService.delete(id);
    }
}