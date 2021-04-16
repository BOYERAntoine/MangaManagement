import { EntityRepository, Repository } from "typeorm";
import { Manga } from "./manga.entity";
import { CreateMangaDto } from "./dto/createMangadto";
@EntityRepository(Manga)
export class MangasRepository extends Repository<Manga> {

    public async createManga(
        createMangaDto: CreateMangaDto,
    ): Promise<Manga> {
        const { title, year, cover,author } = createMangaDto;
        const manga = new Manga();
        manga.title = title;
        manga.year = year;
        manga.cover = cover;
        manga.author=author;

        await this.save(manga);
        return manga;
    }

}
