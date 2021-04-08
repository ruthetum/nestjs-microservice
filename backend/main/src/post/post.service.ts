import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import {Post, PostDocument} from "./post.model";
import {Model} from "mongoose";

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>
    ) {
    }

    async all() {
        return this.postModel.find().exec();
    }
}
