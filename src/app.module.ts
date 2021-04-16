import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './AuthModule/users.module';
import { AuthorsModule } from './authors/authors.module';
import { ChaptersModule } from './chapters/chapters.module';
import { typeormConfig } from './config/typeorm.config';
import { MangasModule } from './mangas/mangas.module';

@Module({
  imports: [AuthorsModule,MangasModule, UsersModule,ChaptersModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
