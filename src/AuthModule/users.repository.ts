import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUserdto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UsersRepository extends Repository<User> {

    public async createUser(
        createUserDto: CreateUserDto,
    ): Promise<User> {
        const saltOrRounds = 10;
        const { mail, password } = createUserDto;
        const user = new User();
        user.mail = mail;
        user.password =await bcrypt.hash(password, saltOrRounds);

        await this.save(user);
        return user;
    }

}
