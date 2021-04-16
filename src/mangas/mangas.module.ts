import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';

import { MangasRepository } from "./mangas.repository";
import { MangasController } from "./mangas.controller";
import { MangasService } from "./mangas.service";
import { Manga } from "./manga.entity";
import { Author } from "src/authors/author.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MangasRepository, Manga, Author])],
    controllers: [MangasController],
    providers: [MangasService],
  })
  export class MangasModule {}