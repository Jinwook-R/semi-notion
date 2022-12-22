import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Post {

    @Column('int', {primary: true, nullable: false})
    id!: number;

    @Column('text',{nullable: false})
    title!: string;

    @Column('text',{nullable: false})
    content!: string;

    @Column('text',{nullable: false})
    user!: string;

    @Column('text',{nullable: false})
    created!: Timestamp;

    @Column('timestamp',{nullable: false})
    modified!: Timestamp;
    
}
