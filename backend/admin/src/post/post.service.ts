import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private readonly postRespository: Repository<Post>
    ) {}

    async all(): Promise<Post[]> {
        return this.postRespository.find();
    }

    async get(id: number): Promise<Post> {
        return this.postRespository.findOne({id});
    }

    async create(data): Promise<Post> {
        return this.postRespository.save(data);
    }

    async update(id: number, data): Promise<any> {
        return this.postRespository.update(id, data);
    }
}
