import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({default: 0})
    likes: string;
}