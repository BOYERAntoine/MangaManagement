import { Manga } from 'src/mangas/manga.entity';
import {Entity,Column,BaseEntity,PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  // @OneToMany(type => Manga, manga => manga.author) mangas: Manga[];

  @OneToMany(() => Manga, manga => manga.author)
 mangas: Manga[];
}