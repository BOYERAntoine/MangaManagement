import { IsNotEmpty, IsString,IsNumber, Matches } from "class-validator";
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
    mail: string;
  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

}