import { Author } from "src/authors/author.entity";
import { Manga } from "src/mangas/manga.entity";

export class CreateChapterDto {
    title: string;
    pages: number;
    manga: Manga;
  }