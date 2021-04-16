import { Author } from "src/authors/author.entity";

export class CreateMangaDto {
    title: string;
    year: string;
    cover: string;
    author: Author;
  }