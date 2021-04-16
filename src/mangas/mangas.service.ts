import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Manga } from "./manga.entity";
import { MangasRepository } from "./mangas.repository";
import { CreateMangaDto } from "./dto/createMangadto";
import { UpdateMangaDto } from "./dto/updateMangadto";
// import { AuthorsRepository } from "../authors/authors.repository";



@Injectable()
      export class MangasService {
        constructor(
          @InjectRepository(MangasRepository)
          // @InjectRepository(AuthorsRepository)

          private mangasRepository: MangasRepository,
          // private authorRepository: AuthorsRepository,

        ) {}
      


        async getAllMangas(): Promise<Manga[]> {
          const found = await this.mangasRepository.find({
            relations:['author']
          });     
          return found;
        }

        async getMangaById(id: number): Promise<Manga> {
          const found = await this.mangasRepository.findOne(id ,{relations:['author']});
          if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
          }
      
          return found;
        }

        async createManga(manga:CreateMangaDto):Promise<Manga>{
          const newManga = await this.mangasRepository.createManga(manga);
          return newManga;
        }

        async deleteMangaById(id:number):Promise<number>{
          if(this.getMangaById(id)){
            await this.mangasRepository.delete(id);
          }
          return id;   
        }
        async updateManga(updateMangaDTO:UpdateMangaDto):Promise<Manga>{
          // const editedManga = await this.mangasRepository.update(updateMangaDTO.id,updateMangaDTO);
          // return editedManga;
          const editedManga = await this.mangasRepository.save(updateMangaDTO);
          return editedManga;
        }
        
      }  