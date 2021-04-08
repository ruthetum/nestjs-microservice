import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Post {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    likes: number
}

export const PostSchema = SchemaFactory.createForClass(Post);