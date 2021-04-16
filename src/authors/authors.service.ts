import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./author.entity";
import { AuthorsRepository } from "./authors.repository";
import { CreateAuthorDto } from "./dto/createAuthordto";
import { UpdateAuthorDto } from "./dto/updateAuthordto";

@Injectable()
      export class AuthorsService {
        constructor(
          @InjectRepository(AuthorsRepository)
          private authorsRepository: AuthorsRepository,
        ) {}
      


        async getAllAuthors(): Promise<Author[]> {
            const found = await this.authorsRepository.find({relations:['mangas']});     
          return found;
        }

        async getAuthorById(id: number): Promise<Author> {
          const found = await this.authorsRepository.findOne(id,{relations:['mangas']});
          if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
          }
      
          return found;
        }

        async createAuthor(author:CreateAuthorDto):Promise<Author>{
          const newAuthor = await this.authorsRepository.createAuthor(author);
          return newAuthor;
        }

        async deleteAuthorById(id:number):Promise<number>{
          if(this.getAuthorById(id)){
            await this.authorsRepository.delete(id);
          }
          return id;   
        }
        async updateAuthor(updateAuthorDTO:UpdateAuthorDto):Promise<Author>{
          const editedAuthor = await this.getAuthorById(updateAuthorDTO.id);
          editedAuthor.firstName= updateAuthorDTO.firstName;
          editedAuthor.lastName= updateAuthorDTO.lastName;
          await editedAuthor.save();
          return editedAuthor;
        }

      }  