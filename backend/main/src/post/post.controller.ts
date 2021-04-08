import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {PostService} from "./post.service";
import {EventPattern} from "@nestjs/microservices";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    async all() {
       return this.postService.all();
    }

    @EventPattern('post_created')
    async postCreated(post: any) {
        await this.postService.create({
            title: post.title,
            content: post.content,
            likes: post.likes
        })
    }

    @EventPattern('post_updated')
    async postUpdated(post: any) {
        await this.postService.update(post.id, {
            title: post.title,
            content: post.content,
            likes: post.likes
        })
    }

    @EventPattern('post_deleted')
    async postDeleted(id: number) {
        await this.postService.delete(id);
    }
}
