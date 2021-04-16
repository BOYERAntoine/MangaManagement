import { Author } from 'src/authors/author.entity';
import { Chapter } from 'src/chapters/chapter.entity';

import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Manga extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  year: string;
  @Column()
  cover: string;
  

  // @ManyToOne(type => Author, author => author.mangas) author: Author; 


  @ManyToOne(() => Author, author => author.mangas)
  author: Author;

  @OneToMany(() => Chapter, chapter => chapter.manga)
  chapters: Chapter[];
}