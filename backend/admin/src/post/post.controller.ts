import { Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    all() {
        return this.postService.all();
    }
}