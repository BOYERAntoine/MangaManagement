import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chapter } from "./chapter.entity";
import { ChaptersRepository } from "./chapters.repository";
import { CreateChapterDto } from "./dto/createChapterdto";
import { UpdateChapterDto } from "./dto/updateChapterdto";
// import { UpdateChapterDto } from "./dto/updateChapterdto";
// import { AuthorsRepository } from "../authors/authors.repository";



@Injectable()
      export class ChaptersService {
        constructor(
          @InjectRepository(ChaptersRepository)
          // @InjectRepository(AuthorsRepository)

          private chaptersRepository: ChaptersRepository,
          // private authorRepository: AuthorsRepository,

        ) {}
      


        async getAllChapters(): Promise<Chapter[]> {
          const found = await this.chaptersRepository.find({
            relations:['manga']
          });     
          return found;
        }

        async getChapterById(id: number): Promise<Chapter> {
          const found = await this.chaptersRepository.findOne(id ,{relations:['manga']});
          if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
          }
      
          return found;
        }

        async createChapter(chapter:CreateChapterDto):Promise<Chapter>{
          const newChapter = await this.chaptersRepository.createChapter(chapter);
          return newChapter;
        }

        async deleteChapterById(id:number):Promise<number>{
          if(this.getChapterById(id)){
            await this.chaptersRepository.delete(id);
          }
          return id;   
        }
        async updateChapter(updateChapterDTO:UpdateChapterDto):Promise<Chapter>{
          // const editedChapter = await this.chaptersRepository.update(updateChapterDTO.id,updateChapterDTO);
          // return editedChapter;
         const editedChapter = await this.getChapterById(updateChapterDTO.id);
         editedChapter.pages=updateChapterDTO.pages;
         editedChapter.title=updateChapterDTO.title;
         editedChapter.manga=updateChapterDTO.manga;
          // const editedChapter = await this.chaptersRepository.update(UpdateChapterDto,);
         await editedChapter.save();

          return editedChapter;
        }
        
      }  