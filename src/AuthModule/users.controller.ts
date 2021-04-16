import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUserdto";
// import { UpdateUserDto } from "./dto/updateUserdto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
      return this.usersService.getAllUsers();
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<User> {
      return this.usersService.getUserById(id);
    }
    @Post('/createUser')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {
      console.log("Create User");
      if(createUserDto){
        return this.usersService.createUser(createUserDto);
      }
      return this.usersService.createUser(createUserDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: number):Promise<number>{
      return this.usersService.deleteUserById(id);
  }
//   @Patch('/updateUser')
//   @UsePipes(ValidationPipe)
//   updateUser(@Body() updateUserDTO: UpdateUserDto):Promise<User> {
//     return this.usersService.updateUser(updateUserDTO);
//   }



}
