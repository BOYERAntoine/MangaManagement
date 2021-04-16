import { EntityRepository, Repository } from "typeorm";
import { Chapter } from "./chapter.entity";
import { CreateChapterDto } from "./dto/createChapterdto";
@EntityRepository(Chapter)
export class ChaptersRepository extends Repository<Chapter> {

    public async createChapter(
        createChapterDto: CreateChapterDto,
    ): Promise<Chapter> {
        const { title, pages,manga } = createChapterDto;
        const chapter = new Chapter();
        chapter.title = title;
        chapter.pages = pages;
        chapter.manga = manga;

        
        await this.save(chapter);
        return chapter;
    }

}
