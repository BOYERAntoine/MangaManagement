import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Author } from "./author.entity";
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/createAuthordto";
import { UpdateAuthorDto } from "./dto/updateAuthordto";

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Get()
    async getAllAuthors(): Promise<Author[]> {
      return this.authorsService.getAllAuthors();
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Author> {
      return this.authorsService.getAuthorById(id);
    }
    @Post('/createAuthor')
    @UsePipes(ValidationPipe)
    createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
      console.log("Create Author");
      if(createAuthorDto){
        return this.authorsService.createAuthor(createAuthorDto);
      }
      return this.authorsService.createAuthor(createAuthorDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: number):Promise<number>{
      return this.authorsService.deleteAuthorById(id);
  }
  @Patch('/updateAuthor')
  @UsePipes(ValidationPipe)
  updateAuthor(@Body() updateAuthorDTO: UpdateAuthorDto):Promise<Author> {
    return this.authorsService.updateAuthor(updateAuthorDTO);
  }



}
