import { EntityRepository, Repository } from "typeorm";
import { Author } from "./author.entity";
import { CreateAuthorDto } from "./dto/createAuthordto";
@EntityRepository(Author)
export class AuthorsRepository extends Repository<Author> {

    public async createAuthor(
        createAuthorDto: CreateAuthorDto,
    ): Promise<Author> {
        const { firstName, lastName } = createAuthorDto;
        const author = new Author();
        author.firstName = firstName;
        author.lastName = lastName;
        await this.save(author);
        return author;
    }

}
