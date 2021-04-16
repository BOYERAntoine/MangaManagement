import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateAuthorDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsNotEmpty()
  @IsString()
  firstName: string;

 @IsNotEmpty()
  @IsString()
  lastName: string;
  }