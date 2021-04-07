import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostController {
    @Get()
    default() {
        return 'all member';
    }
}