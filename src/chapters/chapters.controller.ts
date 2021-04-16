import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Chapter } from "./chapter.entity";
import { ChaptersService } from "./chapters.service";
import { CreateChapterDto } from "./dto/createChapterdto";
import { UpdateChapterDto } from "./dto/updateChapterdto";

@Controller('chapters')
export class ChaptersController {
    constructor(private readonly chaptersService: ChaptersService) {}

    @Get()
    async getAllChapters(): Promise<Chapter[]> {
      return this.chaptersService.getAllChapters();
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Chapter> {
      return this.chaptersService.getChapterById(id);
    }
    @Post('/createChapter')
    @UsePipes(ValidationPipe)
    createChapter(@Body() createChapterDto: CreateChapterDto) {
      console.log("Create Chapter");
      if(createChapterDto){
        return this.chaptersService.createChapter(createChapterDto);
      }
      return this.chaptersService.createChapter(createChapterDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: number):Promise<number>{
      return this.chaptersService.deleteChapterById(id);
  }
  @Patch('/updateChapter')
  @UsePipes(ValidationPipe)
  updateChapter(@Body() updateChapterDTO: UpdateChapterDto):Promise<Chapter> {
    return this.chaptersService.updateChapter(updateChapterDTO);
  }



}
