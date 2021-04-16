import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';

import { UsersRepository } from "./users.repository";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    // imports: [TypeOrmModule.forFeature([UsersRepository])],
    imports: [ PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({   secret: 'topSecret51',   signOptions: {     expiresIn: 3600,   }, }), TypeOrmModule.forFeature([UsersRepository]),],
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}



