import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Manga } from "./manga.entity";
import { MangasService } from "./mangas.service";
import { CreateMangaDto } from "./dto/createMangadto";
import { UpdateMangaDto } from "./dto/updateMangadto";

@Controller('mangas')
export class MangasController {
    constructor(private readonly mangasService: MangasService) {}

    @Get()
    async getAllMangas(): Promise<Manga[]> {
      return this.mangasService.getAllMangas();
    }

    @Get('/:id')
    async getMangaById(@Param('id', ParseIntPipe) id: number): Promise<Manga> {
      return this.mangasService.getMangaById(id);
    }
    @Post('/createManga')
    @UsePipes(ValidationPipe)
    createManga(@Body() createMangaDto: CreateMangaDto) {
      console.log("Create Manga",createMangaDto);
      return this.mangasService.createManga(createMangaDto);
    }

    @Delete('/:id')
    deleteMangaById(@Param('id') id: number):Promise<number>{
      return this.mangasService.deleteMangaById(id);
  }
  @Patch('/updateManga')
  @UsePipes(ValidationPipe)
  async updateManga(@Body() updateMangaDTO: UpdateMangaDto):Promise<Manga> {
    const editedManga = await this.getMangaById(updateMangaDTO.id);
    editedManga.title= updateMangaDTO.title;
    editedManga.year= updateMangaDTO.year; 
    editedManga.cover =updateMangaDTO.cover;
    editedManga.author =updateMangaDTO.author;
    await editedManga.save();

    return editedManga;
  }

}
