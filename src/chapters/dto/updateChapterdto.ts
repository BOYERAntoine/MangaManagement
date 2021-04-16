import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";
import { Author } from "src/authors/author.entity";
import { Manga } from "src/mangas/manga.entity";

export class UpdateChapterDto {
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    id:number
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    pages: number;
    
    @IsNotEmpty()
    manga: Manga;
  }