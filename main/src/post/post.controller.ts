import { Get, Post, Param, HttpService } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {PostService} from "./post.service";
import {EventPattern} from "@nestjs/microservices";

@Controller('posts')
export class PostController {
    constructor(
        private postService: PostService,
        private httpService: HttpService
    ) {}

    @Get()
    async all() {
       return this.postService.all();
    }

    @Post(':id/like')
    async like(@Param('id') id: number) {
        const post = await this.postService.findOne(id);

        this.httpService.post(`http://loaclhost:8000/api/products/${id}/like`, {}).subscribe(
            res => {
                console.log(res);
            }
        )

        return  this.postService.update(id, {
            likes: post.likes+1
        });
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
