import { Manga } from 'src/mangas/manga.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  pages: number;

  
  @ManyToOne(() => Manga, manga => manga.chapters)
  manga: Manga;
}