import {Controller, Get, Post, Body, Param, Put, Delete, Inject} from '@nestjs/common';
import { PostService } from './post.service';
import {ClientProxy} from "@nestjs/microservices";

@Controller('posts')
export class PostController {

    constructor(
        private postService: PostService,
        @Inject('POST_SERVICE') private readonly client: ClientProxy
    ) {
    }

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
        const post = this.postService.create({
            title,
            content
        });

        this.client.emit('post_created', post);

        return post;
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('content') content: string
    ) {
        await this.postService.update(id, {
            title,
            content
        });

        const post = await this.postService.get(id);

        this.client.emit('post_updated', post);

        return post;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.postService.delete(id);

        this.client.emit('post_deleted', id);
    }

    @Post(':id/like')
    async like(@Param('id') id: number) {
        const post = await this.postService.get(id);

        return this.postService.update(id, {
            likes: post.likes + 1
        })
    }
}