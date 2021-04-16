import { IsNotEmpty, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
   firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;
  }