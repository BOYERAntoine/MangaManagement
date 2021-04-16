import { Interface } from "readline";
import { Author } from "src/authors/author.entity";

export interface Manga{
    id:number;
    title:string;
    year:string;
    cover:string;
    author:Author

}

