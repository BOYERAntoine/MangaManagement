import { Author } from "src/authors/author.entity";

export class UpdateMangaDto {
    id: number;
    title: string;
    year: string;
    cover: string;
    author:Author;

  }