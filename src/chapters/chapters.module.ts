import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';

import { ChaptersRepository } from "./chapters.repository";
import { ChaptersController } from "./chapters.controller";
import { ChaptersService } from "./chapters.service";
import { Chapter } from "./chapter.entity";
import { Manga } from "src/mangas/manga.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ChaptersRepository, Chapter, Manga])],
    controllers: [ChaptersController],
    providers: [ChaptersService],
  })
  export class ChaptersModule {}