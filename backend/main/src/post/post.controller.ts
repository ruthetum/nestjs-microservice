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

    @EventPattern('hello')
    async hello(data: string) {
        console.log(data);
    }
}
