import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';

import { AuthorsRepository } from "./authors.repository";
import { AuthorsController } from "./authors.controller";
import { AuthorsService } from "./authors.service";

@Module({
    imports: [TypeOrmModule.forFeature([AuthorsRepository])],
    controllers: [AuthorsController],
    providers: [AuthorsService],
  })
  export class AuthorsModule {}