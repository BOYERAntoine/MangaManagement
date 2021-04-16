import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/createUserdto";
// import { UpdateUserDto } from "./dto/updateUserdto";

@Injectable()
      export class UsersService {
        constructor(
          @InjectRepository(UsersRepository)
          private usersRepository: UsersRepository,
        ) {}
      


        async getAllUsers(): Promise<User[]> {
          const found = await this.usersRepository.find();     
          return found;
        }

        async getUserById(id: number): Promise<User> {
          const found = await this.usersRepository.findOne(id);
          if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
          }
      
          return found;
        }

        async createUser(user:CreateUserDto):Promise<User>{
          const newUser = await this.usersRepository.createUser(user);
          return newUser;
        }

        async deleteUserById(id:number):Promise<number>{
          if(this.getUserById(id)){
            await this.usersRepository.delete(id);
          }
          return id;   
        }
        // async updateUser(updateUserDTO:UpdateUserDto):Promise<User>{
        //   // const editedUser = await this.userRepository.update(updateUserDTO.id,updateUserDTO);
        //   // return editedUser;

        //   const editedUser = await this.usersRepository.save(updateUserDTO);

        //   await editedUser.save();
        //   return editedUser;

        //   // const editedUser = await this.getUserById(UpdateUserDto.id);
        //   // editedUser.firstName = UpdateUserDto.firstName;

        // }
        
      }  